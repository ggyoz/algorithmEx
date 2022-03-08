using System;

namespace Test
{
    public class Solution {
        public string solution(int a, int b) {
            string answer = "";

            DateTime date = new DateTime(2016, a, b);

            //answer = date.DayOfWeek.ToString().Substring(0,3).ToUpper();

            answer = date.ToString("ddd").ToUpper();

            Console.WriteLine(answer);

            return answer;
        }

    }

}






