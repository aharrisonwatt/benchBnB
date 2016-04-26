class Bench < ActiveRecord::Base
  def self.in_bounds(bounds)
    results = []

    max_lat = bounds['northEast']['lat'].to_f
    max_lng = bounds['northEast']['lng'].to_f
    min_lat = bounds['southWest']['lat'].to_f
    min_lng = bounds['southWest']['lng'].to_f


    Bench.all.each do |bench|
      if (bench.lat < max_lat &&
        bench.lat > min_lat &&
        bench.lng < max_lng &&
        bench.lng > min_lng)
        results << bench
      end
    end

    return results
  end
end
