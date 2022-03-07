using System;

namespace Test{

    class Program{

        static void Main(string[] args){       

            Program p = new Program();
            
            int[] result = p.solution2( new string[]{"muzi", "frodo", "apeach", "neo"}, new string[] {"muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"}, 2);

            foreach(int n in result){
                Console.WriteLine(n);
            }

        }

        public int[] solution(string[] id_list, string[] report, int k) {
        
            int[] answer = new int[id_list.Length];
            int[] report_cnt = new int[id_list.Length];
            int[] reported_cnt = new int[id_list.Length];

            HashSet<string> report_set = new HashSet<string>(report);
            
            Dictionary<string,List<string>> report_dic = new Dictionary<string, List<string>>();

            foreach(string id in id_list){            
                report_dic.Add(id, new List<string>());
            }
            
            foreach( string report_str in report_set ){
                
                string id = report_str.Split(' ')[0];
                string reported_id = report_str.Split(' ')[1];                   

                report_dic[reported_id].Add(id);

            }

            foreach(string id in id_list){

                if(report_dic[id].Count() >= k){

                    foreach(string report_id in report_dic[id]){

                        for(int i = 0; i < id_list.Length; i++){

                            if(id_list[i] == report_id){
                                answer[i]++;
                            }

                        }
                        
                    }

                }

            }

            return answer;

        }
        
        public int[] solution1(string[] id_list, string[] report, int k) {
            int[] answer = new int[id_list.Length];
            Dictionary<string, HashSet<string>> reporters = new Dictionary<string, HashSet<string>>();
            foreach (string line in report) {
                string[] r = line.Split(" ");
                if (!reporters.ContainsKey(r[1])) reporters.Add(r[1], new HashSet<string>());
                reporters[r[1]].Add(r[0]);
            }
            foreach (var item in reporters) {
                if (item.Value.Count >= k) {
                    foreach (var s in item.Value) {
                        answer[Array.IndexOf(id_list, s)]++;
                    }
                }
            }
            return answer;
        }

        public int[] solution3(string[] id_list, string[] report, int k) {
            int[] answer = new int[id_list.Length]; // 결과 배열.

            int[] receive = new int[id_list.Length]; // 신고받은 횟수.
            int[] send = new int[id_list.Length];    // 신고한 횟수.

            report = report.Distinct().ToArray();

            // 신고받은 횟수를 기록.
            for (int i = 0; i < report.Length; i++) {
                string report_str = report[i].Split(' ')[1];
                int report_index = Array.IndexOf(id_list, report_str);
                receive[report_index]++;
            }

            // 신고받은 횟수가 k보다 높을 시 answer 값을 상승.
            for (int i = 0; i < report.Length; i++) {
                string report_str = report[i].Split(' ')[1];
                int report_index = Array.IndexOf(id_list, report_str);

                if (receive[report_index] >= k) {
                    string send_str = report[i].Split(' ')[0];
                    int send_index = Array.IndexOf(id_list, send_str);
                    answer[send_index]++;
                }
            }

            return answer;
        }


        public int[] solution2(string[] id_list, string[] report, int k) {
            var tReport = report.Distinct().
                Select(s => s.Split(' ')).
                GroupBy(g => g[1]).
                Where(w => w.Count() >= k).
                SelectMany(sm => sm.Select(s => s[0])).
                ToList();

        return id_list.ToDictionary(x => x, x => tReport.Count(c => x == c)).Values.ToArray();
        //return new int[]{};

        // const bool debug = false;
        // void print(Object obj){
        //     if(debug) Console.Write(obj);
        // }
        }

    }

    

}






