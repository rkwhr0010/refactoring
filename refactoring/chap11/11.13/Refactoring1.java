import java.util.Deque;
import java.util.List;

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
			if(available.isEmpty()) {
				result = Resource.create();
				allocated.add(result);
			}else {
				result = available.pop();
				allocated.add(result);
			}
			return result;
		}
	}
}
