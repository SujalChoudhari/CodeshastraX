a = 9
b = 3
fac_a = 1
fac_b = 1
for i in range(1,a+1):
  fac_a *= i
for i in range(1,b+1):
  fac_b *= i
result = fac_a / fac_b
print(result)
