import java.util.*;

public class test {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        List<Integer> arr = new ArrayList<Integer>();
        List<Integer> period = new ArrayList<Integer>();
        Set<Integer> set = new HashSet<Integer>() ;


        int size = scn.nextInt();
        int start = scn.nextInt();
        int end = scn.nextInt();
        for(int i=0;i<size;i++){
            arr.add(scn.nextInt());
        }

        if(arr.indexOf(end) == -1){
            int max = 0;
            for(int x : arr)
                if(max < x)
                    max = x;
            System.out.println(max);
            return;
        }

        int startIndex = arr.indexOf(start) + 1;
        int endIndex = arr.indexOf(end) ; // ไมต้อง -1 เพราะ i < endIndex เเล้ว

        for(int i = startIndex;i<endIndex; i++){
            int key = arr.get(i);

            // ====================  1  ====================
            if(period.indexOf(key) != -1)
                continue;
            period.add(key);

            // ====================  2  ====================
            if(period.indexOf(key) == -1)
                period.add(key);

            // ====================  3  ====================
            set.add(key);
        }

        int sum = 0;
        for(int x : period)
            sum += x;
        System.out.println(sum);



    }
}
