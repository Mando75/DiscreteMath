import java.math.BigInteger;

import java.util.Map;
import java.util.TreeMap;

public class Mystery
{
   public static void main(String[] args)
   {
      for (String arg : args)
      {
         output(new BigInteger(arg));
      }
   }

   public static void output(BigInteger n)
   {
      System.out.println(mystery(n));
   }

   public static String mystery(BigInteger n)
   {
      StringBuffer ans = new StringBuffer(n.toString());
      ans.append(" = ");
      BigInteger bi2 = new BigInteger("2");
      Map<BigInteger, BigInteger> tm = new TreeMap<BigInteger, BigInteger>();
      BigInteger k = BigInteger.ZERO;
      while (!n.testBit(0)) // n is even
      {
         n = n.shiftRight(1);
         k = k.add(BigInteger.ONE);
      }
      if (k.compareTo(BigInteger.ZERO) != 0)
      {
         tm.put(bi2, k);
      }
      BigInteger p = BigInteger.ONE;
      while (p.multiply(p).compareTo(n) <= 0)
      {
         p = p.add(bi2);
         k = BigInteger.ZERO;
         while (n.mod(p).compareTo(BigInteger.ZERO) == 0)
         {
            n = n.divide(p);
            k = k.add(BigInteger.ONE);
         }
         if (k.compareTo(BigInteger.ZERO) != 0)
         {
            tm.put(p, k);
         }
      }
      if (n.compareTo(BigInteger.ONE) != 0)
      {
         tm.put(n, BigInteger.ONE);
      }
      for (BigInteger key : tm.keySet())
      {
         ans.append(key);
         ans.append('^');
         ans.append(tm.get(key));
         ans.append('*');
      }
      return ans.toString().substring(0, ans.length() - 1);
   }
}
