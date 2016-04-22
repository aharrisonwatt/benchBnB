json.array!(@benches) do |bench|
  json.partial!('benches', bench: bench)
end
