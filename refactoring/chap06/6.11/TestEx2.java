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
		//함수 추출 후, 클래스로 옮김 이후, 불필요한 인자 제거 
		public boolean onlyCountReady() {
			return Stream.of(args).anyMatch(arg->"-r".equals(arg));
		}
	}
	//Main.java
	static long run(String[] args) throws IOException{
		if(args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
		CommandLine commandLine = new CommandLine(args);
		return countOrders(commandLine);
	}
	private static long countOrders(CommandLine commandLine)
			throws IOException {
		File input = Paths.get(commandLine.filename()).toFile();
		ObjectMapper mapper = new ObjectMapper();
		Order[] orders = mapper.readValue(input, Order[].class);
		if(commandLine.onlyCountReady()) {
			return Stream.of(orders)
					.filter(o->"ready".equals(o.status))
					.count();
		}else {
			return orders.length;
		}
	}
}
