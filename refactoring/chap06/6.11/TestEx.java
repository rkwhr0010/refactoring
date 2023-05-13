package kimspring.helloboot;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.stream.Stream;

import com.fasterxml.jackson.databind.ObjectMapper;

public class TestEx {
	static class Order{
		String status;
	}
	
	public static void main(String[] args) {
		try {
			System.out.println(run(args));
		} catch (Exception e) {
			System.err.println(e);
			System.exit(1);
		}
	}
	//잔여 매개변수 처리 완료
	private static class CommandLine{
		private boolean onlyCountReady;
		private String filename;
	}
	static long run(String[] args) throws IOException{
		if(args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
		CommandLine commandLine = new CommandLine();
		commandLine.filename = args[args.length -1];
		commandLine.onlyCountReady = Stream.of(args).anyMatch(arg->"-r".equals(arg));
		return countOrders(commandLine);
	}
	private static long countOrders(CommandLine commandLine)
			throws IOException {
		File input = Paths.get(commandLine.filename).toFile();
		ObjectMapper mapper = new ObjectMapper();
		Order[] orders = mapper.readValue(input, Order[].class);

		if(commandLine.onlyCountReady) {
			return Stream.of(orders)
					.filter(o->"ready".equals(o.status))
					.count();
		}else {
			return orders.length;
		}
	}
}
