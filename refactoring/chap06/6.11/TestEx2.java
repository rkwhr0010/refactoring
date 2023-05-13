package kimspring.helloboot;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.stream.Stream;

import com.fasterxml.jackson.databind.ObjectMapper;

public class TestEx {
	static class Order{	String status;}
	
	public static void main(String[] args) {
		try {
			System.out.println(run(args));
		} catch (Exception e) {
			System.err.println(e);
			System.exit(1);
		}
	}
	//CommandLine.java
	private static class CommandLine{
		String[] args;

		public CommandLine(String[] args) {
			this.args = args;
		}
		public  String filename() {
			return args[args.length -1];
		}
	}
	//Main.java
	static long run(String[] args) throws IOException{
		if(args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
		CommandLine commandLine = new CommandLine(args);
		return countOrders(commandLine, args);
	}
	//매개변수 정리
	private static long countOrders(CommandLine commandLine, String[] args)
			throws IOException {
		File input = Paths.get(commandLine.filename()).toFile();
		ObjectMapper mapper = new ObjectMapper();
		Order[] orders = mapper.readValue(input, Order[].class);
		if(Stream.of(args).anyMatch(arg->"-r".equals(arg))) {
			return Stream.of(orders)
					.filter(o->"ready".equals(o.status))
					.count();
		}else {
			return orders.length;
		}
	}
}
