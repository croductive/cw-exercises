def next_bigger(num)
  counter = num+1
  until num.to_s.split('').sort == counter.to_s.split('').sort
    if counter.to_s.length > num.to_s.length
      return -1
    else
      counter += 1
    end
  end
  return counter
end

puts(next_bigger(12),21)
puts(next_bigger(513),531)
puts(next_bigger(2017),2071)
puts(next_bigger(414),441)
puts(next_bigger(144),414)
