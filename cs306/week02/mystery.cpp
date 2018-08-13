//
// compile with g++ mystery.cpp -o mystery -lntl
//
#include <cstdlib>
#include <cstring>
#include <sstream>
#include <map>
#include <NTL/ZZ.h>
using namespace std;
using namespace NTL;

string mystery(ZZ n)
{
   ostringstream ss;
   ss << n << " = ";
   map<ZZ, ZZ> answer;

   ZZ zero = to_ZZ(0);
   ZZ one = to_ZZ(1);
   ZZ two = to_ZZ(2);
   ZZ k = zero;

   while (n % two == zero) // n is even
   {
      n /= two;
      k++;
   }

   if (k != zero)
   {
      answer.insert(pair<ZZ, ZZ>(two, k));
   }

   ZZ p = one;

   while (p * p <= n)
   {
      p += two;
      k = zero;

      while (n % p == zero)
      {
         n /= p;
         k++;
      }
      if (k != zero)
      {
         answer.insert(pair<ZZ, ZZ>(p, k));
      }
   }
   if (n != one)
   {
      answer.insert(pair<ZZ, ZZ>(n, one));
   }
   for (map<ZZ, ZZ>::const_iterator it = answer.begin();
        it != answer.end(); it++)
   {
      ZZ key = (*it).first;
      ss << key << "^" << answer[key] << "*";
   }
   string ans = ss.str();
   return ans.substr(0, ans.size() - 1);
}

void output(ZZ n)
{
   cout << mystery(n) << endl;
}

int main(int argc, char** argv)
{
   for (int i = 1; i < argc; i++)
   {
      output(to_ZZ(argv[i]));
   }
   return 0;
}
