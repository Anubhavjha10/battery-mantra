export const vehicleService = {
  getVehicleTypes: async () => {
    return ['Car', 'Bike', 'Commercial Vehicle', 'Truck', 'Bus'];
  },

  getCompanies: async (vehicleType) => {
    if (!vehicleType) return [];
    
    switch (vehicleType.toLowerCase()) {
      case 'car':
        return ['Maruti Suzuki', 'Hyundai', 'Tata', 'Mahindra', 'Honda', 'Toyota', 'Kia', 'MG', 'BMW', 'Audi', 'Mercedes'];
      case 'bike':
        return ['Hero MotoCorp', 'Honda 2-Wheelers', 'TVS', 'Bajaj', 'Royal Enfield', 'Yamaha', 'Suzuki 2-Wheelers', 'KTM'];
      case 'commercial vehicle':
      case 'truck':
      case 'bus':
        return ['Tata Motors', 'Ashok Leyland', 'Mahindra & Mahindra', 'Eicher', 'BharatBenz', 'Volvo'];
      default:
        return ['Maruti Suzuki', 'Hyundai', 'Tata', 'Mahindra', 'Honda'];
    }
  },

  getModels: async (vehicleType, company) => {
    if (!company) return [];
    const comp = company.toLowerCase();

    // Cars
    if (comp === 'maruti suzuki') return ['Swift', 'Alto 800', 'Dzire', 'Baleno', 'Brezza', 'Ertiga', 'Grand Vitara'];
    if (comp === 'hyundai') return ['i20', 'Creta', 'Verna', 'Venue', 'Grand i10 Nios', 'Alcazar', 'Tucson'];
    if (comp === 'tata') return ['Nexon', 'Altroz', 'Harrier', 'Safari', 'Tiago', 'Tigor', 'Punch'];
    if (comp === 'mahindra') return ['XUV700', 'Scorpio-N', 'Thar', 'Bolero', 'XUV300', 'Marazzo'];
    if (comp === 'honda') return ['City', 'Amaze', 'Elevate', 'Jazz', 'Civic'];
    if (comp === 'toyota') return ['Innova Hycross', 'Fortuner', 'Glanza', 'Urban Cruiser Taisor', 'Camry'];
    
    // Bikes
    if (comp === 'hero motocorp') return ['Splendor Plus', 'HF Deluxe', 'Passion Pro', 'Glamour', 'Xpulse 200'];
    if (comp === 'honda 2-wheelers') return ['Activa 6G', 'Shine 125', 'SP 125', 'Unicorn', 'Hornet 2.0'];
    if (comp === 'royal enfield') return ['Classic 350', 'Bullet 350', 'Hunter 350', 'Meteor 350', 'Himalayan 450'];
    if (comp === 'bajaj') return ['Pulsar 150', 'Pulsar NS200', 'Platina 100', 'Dominar 400', 'Avenger Cruise 220'];

    // Trucks / Commercial
    if (comp === 'tata motors') return ['Ace Gold', 'Intra V30', 'Yodha Pickup', 'LPT 1916', 'Prima 5530.S'];
    if (comp === 'ashok leyland') return ['Dost LiTE', 'Bada Dost', 'Partner', 'Ecomet Star', 'U-3518'];

    // Default general models
    return ['Standard Model A', 'Standard Model B', 'Elite Variant X', 'Eco Classic'];
  },

  getVariants: async (model) => {
    if (!model) return [];
    return ['LXI / Base', 'VXI / Mid', 'ZXI / Top / Option', 'Automatic / Premium'];
  },

  getFuelTypes: async () => {
    return ['Petrol', 'Diesel', 'CNG', 'Hybrid'];
  },

  getYears: async () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let y = currentYear; y >= currentYear - 15; y--) {
      years.push(String(y));
    }
    return years;
  },

  getCompatibleBatteries: async ({ vehicleType, company, model, variant, fuelType, year }) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Base specifications customized by vehicle selection
    const capacity = vehicleType?.toLowerCase() === 'bike' ? '4Ah - 9Ah' : '35Ah - 85Ah';
    const warranty = vehicleType?.toLowerCase() === 'bike' ? '24 - 48 Months' : '36 - 72 Months';
    
    // Generate high quality mock batteries fitting the chosen specifications
    return [
      {
        id: 1001,
        name: `Exide Matrix Red (${capacity})`,
        price: vehicleType?.toLowerCase() === 'bike' ? 1200 : 4950,
        oldPrice: vehicleType?.toLowerCase() === 'bike' ? 1400 : 5600,
        image: 'assets/images/product/medium-size/shop/1-1-290x350.jpg',
        rating: 5,
        isSale: true,
        description: `Premium maintenance-free battery for your ${company || 'Vehicle'} ${model || ''}. Features ${warranty} warranty, high cranking power, and robust heat resistance.`,
        category: 'Car Battery',
        brand: 'Exide',
        slug: 'exide-matrix-red-compatible'
      },
      {
        id: 1002,
        name: `Amaron Pro Hi-Life (${capacity})`,
        price: vehicleType?.toLowerCase() === 'bike' ? 1350 : 5400,
        oldPrice: vehicleType?.toLowerCase() === 'bike' ? 1600 : 6100,
        image: 'assets/images/product/medium-size/shop/1-2-290x350.jpg',
        rating: 5,
        isSale: false,
        description: `Longest lasting zero-maintenance battery compatible with ${company || 'Vehicle'} ${model || ''} variants. Silver-alloy technology with ${warranty} warranty coverage.`,
        category: 'Car Battery',
        brand: 'Amaron',
        slug: 'amaron-pro-hilife-compatible'
      },
      {
        id: 1003,
        name: `SF Sonic Power Packer (${capacity})`,
        price: vehicleType?.toLowerCase() === 'bike' ? 1100 : 4300,
        oldPrice: vehicleType?.toLowerCase() === 'bike' ? 1300 : 4900,
        image: 'assets/images/product/medium-size/shop/1-3-290x350.jpg',
        rating: 4,
        isSale: true,
        description: `High performance power pack engineered for Indian roads. Compatible with ${company || 'Vehicle'} ${model || ''} (${fuelType || 'Petrol'}). Features ${warranty} warranty.`,
        category: 'Car Battery',
        brand: 'SF Sonic',
        slug: 'sf-sonic-compatible'
      }
    ];
  }
};
