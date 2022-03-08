using System;

namespace Test{

    class Solution {
        
        public int[] Solution1(int[] array, int[,] commands) {

            //int[] answer = new int[commands.Length / 3];

            List<int> answer = new List<int>();

            // 2차원 배열 list로 변환
            List<int[]> comm_list = new List<int[]>();

            // 선택된 배열만 복사
            List<int[]> calc_list = new List<int[]>();           

            for(int i = 0; i < commands.Length / 3; i++){

                int[] comm_arr = new int[3];

                for(int j = 0; j < 3; j++ ){
                    //Console.WriteLine(commands[i,j]);
                    comm_arr[j] = commands[i,j];
                }

                comm_list.Add(comm_arr);
                
            }

            
            foreach(int[] arr in comm_list){

                int[] copyed_arr = new int[arr[1] - arr[0] + 1];
                int cnt = 0;

                for(int i = arr[0]; i <= arr[1]; i++ ){                                       

                    Console.WriteLine("array[i] : " + array[i - 1]);

                    copyed_arr[cnt] = array[i - 1];
                    cnt++;

                }

                cnt = 0;

                Array.Sort(copyed_arr);

                answer.Add(copyed_arr[arr[2] - 1]);

            }

            return answer.ToArray();

        }

        public int[] solution(int[] array, int[,] commands){

            int[] answer = new int[commands.GetLength(0)];
            // int[3,2] GetLength(0) > 3 / GetLength(1) > 2

             // 선택된 배열만 복사
            List<int> calc_list = new List<int>();

            for(int i = 0; i < commands.Length / 3; i++){

                calc_list.Clear();

                int x = commands[i, 0]; // startnum
                int y = commands[i, 1]; // endnum
                int z = commands[i, 2]; // index
                
                for(int a = x-1; a < y; a++){

                    Console.WriteLine("a : " + a);
                    Console.WriteLine("array[a] : " + array[a]);

                    calc_list.Add(array[a]);

                }

                calc_list.Sort();
                Console.WriteLine("----------" + calc_list[z-1] + "-------------" );

                answer[i] = calc_list[z-1];

            }

            return answer;

        }

    }

}