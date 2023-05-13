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
	private static class CommandLine{
		private boolean onlyCountReady;
	}
	static long run(String[] args) throws IOException{
		if(args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
		CommandLine commandLine = new CommandLine();
		String filename = args[args.length -1];
		//중간 데이토 구조로 옮김, 이후 첫번째 단계로 옮김, 이후 매개변수 제거
		commandLine.onlyCountReady = Stream.of(args).anyMatch(arg->"-r".equals(arg));
		return countOrders(commandLine, filename);
	}
	private static long countOrders(CommandLine commandLine, String filename)
			throws IOException {
		File input = Paths.get(filename).toFile();
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
