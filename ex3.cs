using System;

namespace Test{

    public class Solution {
        public int[] solution(int[] arr, int divisor) {

            List<int> answer = new List<int>();            

            foreach(int a in arr){                

                if( a % divisor == 0 ){
                    answer.Add(a);                    
                }

            }           

            if(answer.Count == 0){
                answer.Add(-1);
            }else{
                answer.Sort();
            }           

            return answer.ToArray();

        }
    
    }


}






