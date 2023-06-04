import java.util.Deque;
import java.util.List;
import java.util.NoSuchElementException;

public class Refactoring1 {
	static class Resource{
		public static Resource create() {
			return null;
		}
	}
	static class ResourcePool{
		private Deque<Resource> available;
		private List<Resource> allocated;
		
		public Resource get() {
			Resource result;
			//풀에서 자원이 고갈되는 건 예상치 못한 조건이 아니다. 따라서 예외처리로 대응하는 건 옳지 않다.
			if(available.isEmpty()) {
				result = Resource.create();
				allocated.add(result);
			}else {
				try {
					result = available.pop();
					allocated.add(result);
				}catch (NoSuchElementException e) {
					throw new AssertionError("도달 불가");
				}
			}
			return result;
		}
	}
}
