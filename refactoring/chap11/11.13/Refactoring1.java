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
			//더 다듬기
			Resource result = available.isEmpty()? Resource.create():available.pop();
			allocated.add(result);
			return result;
		}
	}
}
