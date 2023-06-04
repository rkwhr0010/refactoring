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
			try {
				result = available.pop();
				allocated.add(result);
			}catch (NoSuchElementException e) {
				result = Resource.create();
				allocated.add(result);
			}
			return result;
		}
	}
}
