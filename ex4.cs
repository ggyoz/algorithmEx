using System;

namespace Test
{
    public class Solution
    {
        public string solution(string s)
        {
            string answer = "";            
            int center_num = s.Length / 2;

            if(s.Length % 2 == 1){
                answer = s[center_num].ToString();
            }else{                
                answer = s.Substring(center_num - 1 , 2);
            }

            return answer;
        }

    }
    
    public class Solution1 {
        public string solution(string s) {
            int n = (s.Length+ 1)%2;
            int l = s.Length/2 - n;
            return s.Substring(l, n + 1);
        }
    }

}






