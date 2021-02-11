def find_outlier(integers)
  even=[]
  odd= []
  integers.each do|i|
    (i.even? ? even<<i:odd <<i)
  end
  (even.count>1 ? odd[0]:even[0])
end

puts(find_outlier([0, 1, 2]), 1)
puts(find_outlier([1, 2, 3]), 2)
