#include <iostream>
#include <limits.h>
#include <vector>
using namespace std;

// void solve(string s,int &i,string temp,int index){
//     // base case
//     if(i==temp.length()){
//         cout<<temp<<endl;
//         return ;
//     }
//     temp.push_back(s[index]);
//     solve(s,i,temp,index+1);
// }

// void solve(string &s,int i ){
//     if(i==s.length()){

//     }
//     solve(s,i+1);
//     ans = ans.push(s[i]);
//     solve(s,i)
// // }
// int solve(vector<int>&v,int target){
//     if(target<=0){
//         if(target==0)
//             return 0;
//         else{
//             return INT_MAX;
//         }
//     }
//     int mini = INT_MAX;
//     for (int i = 0; i < v.size(); i++)
//     {
//        int ans = solve(v,target-v[i]);
//        if(ans!=INT_MAX)
//         mini = min(ans+1,mini);
//     }

//     return mini;
// }

int solve_max(vector<int>&v, int target){
    if(target<=0){
        if(target==0)
            return 0;
        else
            return INT_MIN;
    }
    int max_ans = INT_MIN;
    
    for (int i = 0; i < v.size(); i++)
    {   
        int ans = solve_max(v,target-v[i]);
        max_ans = max(max_ans,ans+1);
    }
    return max_ans;
}
int main(){
    cout<<INT_MIN<<" int_min "<<endl;
    vector<int>v {2,3};
    int target = 7;
    // int ans = solve(v,target);
    int ans = solve_max(v,target);
    if(ans>0)
        cout<<ans<<endl;
    else    
        cout<<0<<endl;
}