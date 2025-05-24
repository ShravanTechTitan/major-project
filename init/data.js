const sampleListings = [
  {
    "title": "Sunny Apartment in Barcelona",
    "description": "Perfect for nature lovers looking for a peaceful getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?cabin"
    },
    "price": 2592,
    "location": "Barcelona",
    "country": "Spain",
    "geometry": {
      "type": "Point",
      "coordinates": [
        2.1734,
        41.3851
      ]
    }
  },
  {
    "title": "Secluded Treehouse Getaway",
    "description": "A perfect hideaway for weekends and vacations.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?apartment"
    },
    "price": 2694,
    "location": "Barcelona",
    "country": "Spain",
    "geometry": {
      "type": "Point",
      "coordinates": [
        2.1734,
        41.3851
      ]
    }
  },
  {
    "title": "Cozy Beachfront Cottage",
    "description": "Step out to the beach in seconds from this cozy home.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?cabin"
    },
    "price": 2096,
    "location": "Bali",
    "country": "Indonesia",
    "geometry": {
      "type": "Point",
      "coordinates": [
        115.1889,
        -8.4095
      ]
    }
  },
  {
    "title": "Cozy Beachfront Cottage",
    "description": "Enjoy traditional charm with modern comforts.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?bungalow"
    },
    "price": 1229,
    "location": "Aspen",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.8175,
        39.1911
      ]
    }
  },
  {
    "title": "Sunny Apartment in Barcelona",
    "description": "Experience heritage and elegance in this grand old villa.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?bungalow"
    },
    "price": 2028,
    "location": "Barcelona",
    "country": "Spain",
    "geometry": {
      "type": "Point",
      "coordinates": [
        2.1734,
        41.3851
      ]
    }
  },
  {
    "title": "Historic Villa in Tuscany",
    "description": "Enjoy traditional charm with modern comforts.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?resort"
    },
    "price": 664,
    "location": "Aspen",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.8175,
        39.1911
      ]
    }
  },
  {
    "title": "Charming Countryside Farmhouse",
    "description": "Unwind in nature\u2019s lap, surrounded by trees and tranquility.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?house"
    },
    "price": 2359,
    "location": "Tokyo",
    "country": "Japan",
    "geometry": {
      "type": "Point",
      "coordinates": [
        139.6917,
        35.6895
      ]
    }
  },
  {
    "title": "Cozy Beachfront Cottage",
    "description": "A perfect hideaway for weekends and vacations.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?villa"
    },
    "price": 2169,
    "location": "New York City",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.006,
        40.7128
      ]
    }
  },
  {
    "title": "Rustic Cabin by the Lake",
    "description": "A bright and airy space, close to local attractions.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?house"
    },
    "price": 2279,
    "location": "Malibu",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -118.7798,
        34.0259
      ]
    }
  },
  {
    "title": "Luxury Penthouse Suite",
    "description": "Escape to this relaxing space with stunning views and fresh air.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?cabin"
    },
    "price": 788,
    "location": "Cairo",
    "country": "Egypt",
    "geometry": {
      "type": "Point",
      "coordinates": [
        31.2357,
        30.0444
      ]
    }
  },
  {
    "title": "Historic Villa in Tuscany",
    "description": "Step out to the beach in seconds from this cozy home.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?apartment"
    },
    "price": 1575,
    "location": "Bali",
    "country": "Indonesia",
    "geometry": {
      "type": "Point",
      "coordinates": [
        115.1889,
        -8.4095
      ]
    }
  },
  {
    "title": "Secluded Treehouse Getaway",
    "description": "Escape to this relaxing space with stunning views and fresh air.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?bungalow"
    },
    "price": 2983,
    "location": "Cairo",
    "country": "Egypt",
    "geometry": {
      "type": "Point",
      "coordinates": [
        31.2357,
        30.0444
      ]
    }
  },
  {
    "title": "Historic Villa in Tuscany",
    "description": "Unwind in nature\u2019s lap, surrounded by trees and tranquility.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?hotel"
    },
    "price": 2102,
    "location": "Florence",
    "country": "Italy",
    "geometry": {
      "type": "Point",
      "coordinates": [
        11.2558,
        43.7696
      ]
    }
  },
  {
    "title": "Sunny Apartment in Barcelona",
    "description": "A perfect hideaway for weekends and vacations.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?apartment"
    },
    "price": 1200,
    "location": "Portland",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.675,
        45.5051
      ]
    }
  },
  {
    "title": "Secluded Treehouse Getaway",
    "description": "A perfect hideaway for weekends and vacations.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?apartment"
    },
    "price": 998,
    "location": "Cairo",
    "country": "Egypt",
    "geometry": {
      "type": "Point",
      "coordinates": [
        31.2357,
        30.0444
      ]
    }
  },
  {
    "title": "Rustic Cabin by the Lake",
    "description": "Enjoy traditional charm with modern comforts.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?bungalow"
    },
    "price": 1600,
    "location": "Portland",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.675,
        45.5051
      ]
    }
  },
  {
    "title": "Rustic Cabin by the Lake",
    "description": "Perfect for nature lovers looking for a peaceful getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?resort"
    },
    "price": 2553,
    "location": "Aspen",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.8175,
        39.1911
      ]
    }
  },
  {
    "title": "Historic Villa in Tuscany",
    "description": "Stay in style and comfort at the center of everything.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?hotel"
    },
    "price": 1849,
    "location": "Tokyo",
    "country": "Japan",
    "geometry": {
      "type": "Point",
      "coordinates": [
        139.6917,
        35.6895
      ]
    }
  },
  {
    "title": "Sunny Apartment in Barcelona",
    "description": "Live the high life with panoramic city views.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?cabin"
    },
    "price": 2789,
    "location": "Malibu",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -118.7798,
        34.0259
      ]
    }
  },
  {
    "title": "Mountain Retreat",
    "description": "Perfect for nature lovers looking for a peaceful getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?cabin"
    },
    "price": 2852,
    "location": "Aspen",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.8175,
        39.1911
      ]
    }
  },
  {
    "title": "Sunny Apartment in Barcelona",
    "description": "Step out to the beach in seconds from this cozy home.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?villa"
    },
    "price": 776,
    "location": "Paris",
    "country": "France",
    "geometry": {
      "type": "Point",
      "coordinates": [
        2.3522,
        48.8566
      ]
    }
  },
  {
    "title": "Sunny Apartment in Barcelona",
    "description": "Unwind in nature\u2019s lap, surrounded by trees and tranquility.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?cabin"
    },
    "price": 2563,
    "location": "Bali",
    "country": "Indonesia",
    "geometry": {
      "type": "Point",
      "coordinates": [
        115.1889,
        -8.4095
      ]
    }
  },
  {
    "title": "Rustic Cabin by the Lake",
    "description": "Perfect for nature lovers looking for a peaceful getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?cabin"
    },
    "price": 2795,
    "location": "Paris",
    "country": "France",
    "geometry": {
      "type": "Point",
      "coordinates": [
        2.3522,
        48.8566
      ]
    }
  },
  {
    "title": "Charming Countryside Farmhouse",
    "description": "Escape to this relaxing space with stunning views and fresh air.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?bungalow"
    },
    "price": 2521,
    "location": "Florence",
    "country": "Italy",
    "geometry": {
      "type": "Point",
      "coordinates": [
        11.2558,
        43.7696
      ]
    }
  },
  {
    "title": "Sunny Apartment in Barcelona",
    "description": "Live the high life with panoramic city views.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?hotel"
    },
    "price": 1287,
    "location": "Barcelona",
    "country": "Spain",
    "geometry": {
      "type": "Point",
      "coordinates": [
        2.1734,
        41.3851
      ]
    }
  },
  {
    "title": "Modern Loft in Downtown",
    "description": "Stay in style and comfort at the center of everything.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?villa"
    },
    "price": 1658,
    "location": "New York City",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.006,
        40.7128
      ]
    }
  },
  {
    "title": "Beachfront Bungalow in Bali",
    "description": "Live the high life with panoramic city views.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?apartment"
    },
    "price": 2938,
    "location": "Bali",
    "country": "Indonesia",
    "geometry": {
      "type": "Point",
      "coordinates": [
        115.1889,
        -8.4095
      ]
    }
  },
  {
    "title": "Secluded Treehouse Getaway",
    "description": "Escape to this relaxing space with stunning views and fresh air.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?villa"
    },
    "price": 944,
    "location": "Malibu",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -118.7798,
        34.0259
      ]
    }
  },
  {
    "title": "Mountain Retreat",
    "description": "Experience heritage and elegance in this grand old villa.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?hotel"
    },
    "price": 1572,
    "location": "Barcelona",
    "country": "Spain",
    "geometry": {
      "type": "Point",
      "coordinates": [
        2.1734,
        41.3851
      ]
    }
  },
  {
    "title": "Charming Countryside Farmhouse",
    "description": "Stay in style and comfort at the center of everything.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?house"
    },
    "price": 850,
    "location": "Tokyo",
    "country": "Japan",
    "geometry": {
      "type": "Point",
      "coordinates": [
        139.6917,
        35.6895
      ]
    }
  },
  {
    "title": "Cozy Beachfront Cottage",
    "description": "Stay in style and comfort at the center of everything.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?house"
    },
    "price": 1057,
    "location": "Florence",
    "country": "Italy",
    "geometry": {
      "type": "Point",
      "coordinates": [
        11.2558,
        43.7696
      ]
    }
  },
  {
    "title": "Beachfront Bungalow in Bali",
    "description": "Experience heritage and elegance in this grand old villa.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?bungalow"
    },
    "price": 574,
    "location": "Malibu",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -118.7798,
        34.0259
      ]
    }
  },
  {
    "title": "Modern Loft in Downtown",
    "description": "Step out to the beach in seconds from this cozy home.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?villa"
    },
    "price": 1599,
    "location": "Tokyo",
    "country": "Japan",
    "geometry": {
      "type": "Point",
      "coordinates": [
        139.6917,
        35.6895
      ]
    }
  },
  {
    "title": "Rustic Cabin by the Lake",
    "description": "Experience heritage and elegance in this grand old villa.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?hotel"
    },
    "price": 741,
    "location": "Portland",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.675,
        45.5051
      ]
    }
  },
  {
    "title": "Sunny Apartment in Barcelona",
    "description": "A bright and airy space, close to local attractions.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?cabin"
    },
    "price": 2429,
    "location": "Florence",
    "country": "Italy",
    "geometry": {
      "type": "Point",
      "coordinates": [
        11.2558,
        43.7696
      ]
    }
  },
  {
    "title": "Luxury Penthouse Suite",
    "description": "Unwind in nature\u2019s lap, surrounded by trees and tranquility.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?villa"
    },
    "price": 2413,
    "location": "New York City",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.006,
        40.7128
      ]
    }
  },
  {
    "title": "Historic Villa in Tuscany",
    "description": "Perfect for nature lovers looking for a peaceful getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?hotel"
    },
    "price": 1797,
    "location": "Portland",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.675,
        45.5051
      ]
    }
  },
  {
    "title": "Secluded Treehouse Getaway",
    "description": "Experience heritage and elegance in this grand old villa.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?apartment"
    },
    "price": 1332,
    "location": "Bali",
    "country": "Indonesia",
    "geometry": {
      "type": "Point",
      "coordinates": [
        115.1889,
        -8.4095
      ]
    }
  },
  {
    "title": "Charming Countryside Farmhouse",
    "description": "Step out to the beach in seconds from this cozy home.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?apartment"
    },
    "price": 2644,
    "location": "New York City",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.006,
        40.7128
      ]
    }
  },
  {
    "title": "Sunny Apartment in Barcelona",
    "description": "A bright and airy space, close to local attractions.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?bungalow"
    },
    "price": 2721,
    "location": "Tokyo",
    "country": "Japan",
    "geometry": {
      "type": "Point",
      "coordinates": [
        139.6917,
        35.6895
      ]
    }
  },
  {
    "title": "Modern Loft in Downtown",
    "description": "Unwind in nature\u2019s lap, surrounded by trees and tranquility.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?cabin"
    },
    "price": 731,
    "location": "Bali",
    "country": "Indonesia",
    "geometry": {
      "type": "Point",
      "coordinates": [
        115.1889,
        -8.4095
      ]
    }
  },
  {
    "title": "Secluded Treehouse Getaway",
    "description": "Perfect for nature lovers looking for a peaceful getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?hotel"
    },
    "price": 2275,
    "location": "Cairo",
    "country": "Egypt",
    "geometry": {
      "type": "Point",
      "coordinates": [
        31.2357,
        30.0444
      ]
    }
  },
  {
    "title": "Rustic Cabin by the Lake",
    "description": "Stay in style and comfort at the center of everything.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?villa"
    },
    "price": 1040,
    "location": "Bali",
    "country": "Indonesia",
    "geometry": {
      "type": "Point",
      "coordinates": [
        115.1889,
        -8.4095
      ]
    }
  },
  {
    "title": "Luxury Penthouse Suite",
    "description": "Perfect for nature lovers looking for a peaceful getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?villa"
    },
    "price": 1730,
    "location": "New York City",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.006,
        40.7128
      ]
    }
  },
  {
    "title": "Historic Villa in Tuscany",
    "description": "A bright and airy space, close to local attractions.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?house"
    },
    "price": 605,
    "location": "Paris",
    "country": "France",
    "geometry": {
      "type": "Point",
      "coordinates": [
        2.3522,
        48.8566
      ]
    }
  },
  {
    "title": "Modern Loft in Downtown",
    "description": "Perfect for nature lovers looking for a peaceful getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?villa"
    },
    "price": 2591,
    "location": "Tokyo",
    "country": "Japan",
    "geometry": {
      "type": "Point",
      "coordinates": [
        139.6917,
        35.6895
      ]
    }
  },
  {
    "title": "Luxury Penthouse Suite",
    "description": "Stay in style and comfort at the center of everything.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?cabin"
    },
    "price": 715,
    "location": "Tokyo",
    "country": "Japan",
    "geometry": {
      "type": "Point",
      "coordinates": [
        139.6917,
        35.6895
      ]
    }
  },
  {
    "title": "Historic Villa in Tuscany",
    "description": "Stay in style and comfort at the center of everything.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?house"
    },
    "price": 626,
    "location": "Aspen",
    "country": "United States",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.8175,
        39.1911
      ]
    }
  },
  {
    "title": "Secluded Treehouse Getaway",
    "description": "Live the high life with panoramic city views.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?apartment"
    },
    "price": 2681,
    "location": "Cairo",
    "country": "Egypt",
    "geometry": {
      "type": "Point",
      "coordinates": [
        31.2357,
        30.0444
      ]
    }
  },
  {
    "title": "Sunny Apartment in Barcelona",
    "description": "Enjoy traditional charm with modern comforts.",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?house"
    },
    "price": 939,
    "location": "Cairo",
    "country": "Egypt",
    "geometry": {
      "type": "Point",
      "coordinates": [
        31.2357,
        30.0444
      ]
    }
  }
];

module.exports = { data: sampleListings };
