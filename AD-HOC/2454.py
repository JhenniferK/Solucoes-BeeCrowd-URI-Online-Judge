entrada = input().split();

P = int(entrada[0]);
R = int(entrada[1]);

if (P == 0):
  print('C');
elif (P == 1 and R == 0):
  print('B');
else:
  print('A');
