export const PRODUCTS = [
  // RESPIRATORY PRODUCTS
  {
    id: 1,
    name: 'Oxygen Concentrator',
    commonName: 'Oxygen Concentrator',
    types: ['Stationary'],
    category: 'Respiratory',
    carddisc: 'oxygen, cpap, oximeter, concentrator, etc,.',
    brand: 'MedAir',
    image: 'https://picsum.photos/seed/hospital-oxygen/600/400',
    description: 'Professional-grade oxygen concentrator suitable for home and clinical use. Provides continuous oxygen supply with adjustable flow rates.',
    longDescription: 'Our advanced Oxygen Concentrator is designed to deliver premium oxygen therapy with minimal noise and maximum efficiency. It features multiple flow rate settings, making it suitable for both acute and chronic respiratory conditions. The device is equipped with safety alarms and comes with a 2-year warranty.',
    specifications: {
      flowRate: '0-5 LPM',
      power: '560W',
      weight: '25 kg',
      warranty: '2 Years',
      dimensions: '65cm x 35cm x 65cm'
    },
    features: [
      'Type: Stationary',
      'Adjustable flow rate from 0-5 LPM',
      'Ultra-quiet operation below 45dB',
      'Built-in humidifier',
      'Energy efficient operation',
      'LED display with timer',
      'Emergency backup battery'
    ]
  },
  {
    id: 2,
    name: 'Portable Oxygen Concentrator',
commonName: 'Oxygen Concentrator',
    types: ['Portable'],
    category: 'Respiratory',
    carddisc: 'oxygen, cpap, oximeter, concentrator, etc,.',
    brand: 'MobixO2',
    image: 'https://picsum.photos/seed/hospital-portable-oxygen/600/400',
    description: 'Compact portable oxygen concentrator ideal for travel and outdoor use.',
    longDescription: 'MobixO2 Portable Oxygen Concentrator is lightweight and travel-friendly. Perfect for patients who need mobility while maintaining oxygen therapy.',
    specifications: {
      flowRate: '0-3 LPM',
      power: '220W',
      weight: '6 kg',
      warranty: '2 Years',
      batteryLife: '8 hours'
    },
    features: [
      'Type: Portable',
      'Compact and lightweight design',
      'Battery backup up to 8 hours',
      'Whisper-quiet operation',
      'Easy to carry with shoulder strap',
      'LED battery indicator',
      'Multiple flow settings'
    ]
  },
  {
    id: 3,
    name: 'Pulse Oximeter - Oxygen Monitor',
commonName: 'Pulse Oximeter',
    types: ['Fingertip'],
    category: 'Respiratory',
    carddisc: 'oxygen, cpap, oximeter, concentrator, etc,.',
    brand: 'PulseCheck',
    image: 'https://picsum.photos/seed/hospital-pulse/600/400',
    description: 'Portable pulse oximeter for monitoring oxygen saturation and heart rate. Perfect for home monitoring.',
    longDescription: 'PulseCheck Pulse Oximeter is a finger-clip device that measures blood oxygen saturation (SpO2) and pulse rate instantly. Ideal for patients with respiratory or cardiac conditions who need regular monitoring.',
    specifications: {
      measurement: 'SpO2 & HR',
      accuracy: '±2%',
      displayType: 'OLED',
      batteryLife: '30 hours',
      material: 'Medical-grade silicone'
    },
    features: [
      'Type: Fingertip',
      'Real-time SpO2 and heart rate monitoring',
      'High accuracy ±2%',
      'OLED bright display',
      'Multiple wearing options (clip & wrist)',
      'Data recording up to 100 readings',
      'USB rechargeable battery'
    ]
  },
  {
    id: 4,
    name: 'CPAP Machine',
commonName: 'CPAP Machine',
    types: ['CPAP'],
    category: 'Respiratory',
    carddisc: 'oxygen, cpap, oximeter, concentrator, etc,.',
    brand: 'RespiCare',
    image: 'https://picsum.photos/seed/hospital-cpap/600/400',
    description: 'Continuous Positive Airway Pressure machine for sleep apnea treatment.',
    longDescription: 'RespiCare CPAP Machine is designed for comfortable sleep apnea therapy with quiet operation and easy-to-use controls.',
    specifications: {
      type: 'CPAP',
      pressureRange: '4-20 cmH2O',
      power: '120W',
      weight: '2.8 kg',
      warranty: '3 Years'
    },
    features: [
      'Type: CPAP',
      'Auto pressure adjustment',
      'Built-in humidifier',
      'Whisper-quiet operation',
      'Compact travel size',
      'Data recording capability',
      'Multiple mask compatibility'
    ]
  },

  // PROTECTIVE PRODUCTS
  {
    id: 5,
    name: 'Surgical Mask (Box of 50)',
commonName: 'Surgical Mask',
    types: ['Surgical'],
    category: 'Protective',
    carddisc: 'mask, gloves, face shield, respirator, etc,.',
    brand: 'SafeGuard',
    image: 'https://picsum.photos/seed/hospital-mask/600/400',
    description: '3-ply surgical masks with high filtration efficiency. Ideal for medical professionals and general public.',
    longDescription: 'SafeGuard Surgical Masks provide superior protection with 3-layer construction. Each box contains 50 masks with comfortable ear loops and adjustable nose bridge for perfect fit. FDA approved and tested for efficiency.',
    specifications: {
      type: '3-ply Surgical',
      filteringEfficiency: '98%',
      quantity: '50 pieces',
      color: 'Blue',
      material: 'Non-woven fabric'
    },
    features: [
      'Type: Surgical',
      'FDA approved 3-ply construction',
      '98% BFE (Bacterial Filtration Efficiency)',
      'Comfortable elastic ear loops',
      'Adjustable nose bridge',
      'Hypoallergenic material',
      'Individually wrapped for hygiene'
    ]
  },
  {
    id: 6,
    name: 'N95 Respirator (Box of 20)',
commonName: 'N95 Respirator',
    types: ['N95'],
    category: 'Protective',
    carddisc: 'mask, gloves, face shield, respirator, etc,.',
    brand: 'ProtectMax',
    image: 'https://picsum.photos/seed/hospital-n95/600/400',
    description: 'NIOSH-approved N95 respirators for maximum protection against airborne particles.',
    longDescription: 'ProtectMax N95 Respirators provide 95% filtration efficiency. Ideal for healthcare workers and high-risk environments.',
    specifications: {
      type: 'N95 Respirator',
      filteringEfficiency: '95%',
      quantity: '20 pieces',
      color: 'White',
      material: 'Electrostatic mesh'
    },
    features: [
      'Type: N95',
      'NIOSH approved for 95% filtration',
      'Advanced electrostatic mesh filter',
      'Adjustable head straps',
      'Valve for easier breathing',
      'Fits all face shapes',
      'Individually packaged'
    ]
  },
  {
    id: 7,
    name: 'Face Shield - Protective',
commonName: 'Face Shield',
    types: ['Protective Shield'],
    category: 'Protective',
    carddisc: 'mask, gloves, face shield, respirator, etc,.',
    brand: 'ShieldGuard',
    image: 'https://picsum.photos/seed/hospital-shield/600/400',
    description: 'Transparent face shield providing protection for eyes and face.',
    longDescription: 'ShieldGuard Face Shield offers anti-fog protection with comfortable headband adjustment.',
    specifications: {
      material: 'Polycarbonate',
      color: 'Clear',
      headband: 'Adjustable',
      weight: '150g'
    },
    features: [
      'Type: Protective Shield',
      'Anti-fog coating for clear vision',
      'Adjustable headband',
      'Durable polycarbonate construction',
      'Reusable and washable',
      'Comfortable for extended wear',
      'Eye and face protection'
    ]
  },
  {
    id: 8,
    name: 'Nitrile Gloves (Box of 100)',
commonName: 'Nitrile Gloves',
    types: ['Nitrile'],
    category: 'Protective',
    carddisc: 'mask, gloves, face shield, respirator, etc,.',
    brand: 'MedGlove',
    image: 'https://picsum.photos/seed/hospital-gloves/600/400',
    description: 'Powder-free nitrile examination gloves for medical professionals.',
    longDescription: 'MedGlove Nitrile Gloves provide excellent barrier protection with superior tactile sensitivity.',
    specifications: {
      material: 'Nitrile',
      quantity: '100 pieces',
      sizes: 'S, M, L, XL',
      color: 'Blue',
      thickness: '0.11mm'
    },
    features: [
      'Type: Nitrile',
      'Latex-free formula',
      'Powder-free for safety',
      'Puncture resistant',
      'Textured fingers for grip',
      'AQL 1.5 standard',
      'Hypoallergenic material'
    ]
  },

  // MOBILITY PRODUCTS
  {
    id: 9,
    name: 'Wheelchair - Standard Manual',
    commonName: 'Wheelchair',
    filterName: 'Mobility',
    types: ['Manual'],
    category: 'Mobility',
    carddisc: 'wheelchair, cot, walker, etc,.',
    brand: 'MoveWell',
    image: 'https://picsum.photos/seed/hospital-wheel/600/400',
    description: 'Lightweight folding wheelchair with comfortable padding and smooth wheels.',
    longDescription: 'MoveWell Standard Wheelchair offers superior comfort and mobility for patients with limited mobility. The lightweight aluminum frame makes it easy to transport.',
    specifications: {
      material: 'Aluminum alloy frame',
      seatWidth: '45cm',
      weight: '12 kg',
      wheelSize: '24 inches',
      foldable: 'Yes'
    },
    features: [
      'Type: Manual',
      'Lightweight aluminum frame',
      'Comfortable padded seat and backrest',
      'Foldable design for easy transport',
      'Smooth-running wheels with brakes',
      'Adjustable footrest',
      'Storage bag included'
    ]
  },
  {
    id: 10,
    name: 'Restroom Wheelchair - Commode',
    commonName: 'Wheelchair',
    filterName: 'Mobility',
    types: ['Commode'],
    category: 'Mobility',
    carddisc: 'wheelchair, cot, walker, etc,.',
    brand: 'ComfortCare',
    image: 'https://picsum.photos/seed/hospital-commode/600/400',
    description: 'Specialized wheelchair with integrated commode seat for bathroom accessibility.',
    longDescription: 'ComfortCare Restroom Wheelchair combines mobility with bathroom functionality. Designed for maximum comfort and hygiene with waterproof materials.',
    specifications: {
      material: 'Stainless steel frame',
      seatWidth: '47cm',
      weight: '18 kg',
      wheelSize: '24 inches',
      waterproof: 'Yes'
    },
    features: [
      'Type: Compound Wheel',
      'Integrated toilet seat functionality',
      'Waterproof seat cushion',
      'Removable commode bucket',
      'Height adjustable for comfort',
      'Safety grab rails',
      'Easy to clean and maintain'
    ]
  },
  {
    id: 11,
    name: 'Electric Wheelchair - Power',
    commonName: 'Wheelchair',
    filterName: 'Mobility',
    types: ['Electric'],
    category: 'Mobility',
    carddisc: 'wheelchair, cot, walker, etc,.',
    brand: 'ElectroMove',
    image: 'https://picsum.photos/seed/hospital-electric/600/400',
    description: 'Battery-powered electric wheelchair for patients with limited upper body strength.',
    longDescription: 'ElectroMove Electric Wheelchair provides independence with joystick control and quiet motor operation.',
    specifications: {
      powerType: 'Electric Motor',
      batteryRange: '30-40 km per charge',
      seatWidth: '50cm',
      weight: '35 kg',
      maxSpeed: '8 km/h'
    },
    features: [
      'Type: Electric',
      'Joystick control system',
      'Long-lasting rechargeable battery',
      'Quiet electric motor',
      'Adjustable armrests and legrest',
      'Swivel seat for transfers',
      'Foldable frame option'
    ]
  },
  {
    id: 12,
    name: 'Walker - Mobility Aid',
    commonName: 'Walker',
    filterName: 'Mobility',
    types: ['Walker'],
    category: 'Mobility',
    carddisc: 'wheelchair, cot, walker, etc,.',
    brand: 'StepSure',
    image: 'https://picsum.photos/seed/hospital-walker/600/400',
    description: 'Lightweight walker for elderly and patients recovering from surgery.',
    longDescription: 'StepSure Walker provides stable support with adjustable height and comfortable grip handles.',
    specifications: {
      material: 'Aluminum frame',
      weight: '3.5 kg',
      height: '78-95cm (adjustable)',
      wheelType: '4 wheels with brakes',
      color: 'Silver'
    },
    features: [
      'Type: 4-Wheel Walker',
      'Aluminum lightweight construction',
      'Adjustable height for all sizes',
      'Comfortable padded handles',
      'Rollator style with hand brakes',
      'Seat for rest periods',
      'Storage basket included'
    ]
  },
  {
    id: 13,
    name: 'Crutches - Walking Support',
    commonName: 'Crutches',
    filterName: 'Mobility',
    types: ['Crutches'],
    category: 'Mobility',
    carddisc: 'wheelchair, cot, walker, etc,.',
    brand: 'StepAid',
    image: 'https://picsum.photos/seed/hospital-crutch/600/400',
    description: 'Adjustable crutches for temporary mobility assistance during recovery.',
    longDescription: 'StepAid Crutches are designed for comfort during lower limb injuries with lightweight aluminum construction.',
    specifications: {
      material: 'Aluminum',
      weight: '2.5 kg per pair',
      heightRange: '140-215cm',
      armpit: 'Padded foam',
      color: 'Black'
    },
    features: [
      'Type: Underarm Crutches',
      'Adjustable for proper fit',
      'Padded underarm supports',
      'Comfortable grip handles',
      'Lightweight aluminum frame',
      'Non-slip rubber feet',
      'Easy to adjust'
    ]
  },
  {
    id: 14,
    name: 'Cane - Single Point Support',
    commonName: 'Cane',
    filterName: 'Mobility',
    types: ['Cane'],
    category: 'Mobility',
    carddisc: 'wheelchair, cot, walker, etc,.',
    brand: 'BalanceAid',
    image: 'https://picsum.photos/seed/hospital-cane/600/400',
    description: 'Ergonomic cane for balance support during walking and rehabilitation.',
    longDescription: 'BalanceAid Cane provides stability with comfortable grip and adjustable height settings.',
    specifications: {
      material: 'Aluminum with wooden grip',
      weight: '350g',
      height: '75-95cm (adjustable)',
      baseCircle: '9cm diameter',
      color: 'Black'
    },
    features: [
      'Type: Standard Single Cane',
      'Adjustable height',
      'Comfortable wooden handle',
      'Non-slip rubber tip',
      'Lightweight design',
      'Support up to 100kg',
      'Portable and easy to carry'
    ]
  },

  // EQUIPMENT PRODUCTS
  {
    id: 15,
    name: 'Hospital Bed - Electric Adjustable',
commonName: 'Hospital Bed',
    types: ['Electric'],
    category: 'Equipment',
    carddisc: 'hospital bed, iv stand, suction, patient lift, etc,.',
    brand: 'HealRest',
    image: 'https://picsum.photos/seed/hospital-bed/600/400',
    description: 'Electric adjustable hospital bed with safety rails. Suitable for home and clinical care.',
    longDescription: 'HealRest Hospital Bed is a professional-grade adjustable bed with electric controls for head, foot, and height adjustment.',
    specifications: {
      type: 'Electric Adjustable',
      mattress: 'Included (120cm x 200cm)',
      rails: 'Detachable',
      power: '220V',
      weight: '180 kg'
    },
    features: [
      'Type: Electric',
      'Electric height adjustment',
      'Adjustable head and foot section',
      'Safety rails included',
      'Premium foam mattress',
      'Remote control operation',
      'Emergency battery backup'
    ]
  },
  {
    id: 16,
name: 'Hospital Bed - Manual Adjustable',
    commonName: 'Hospital Bed',
    types: ['Manual'],
    category: 'Equipment',
    carddisc: 'hospital bed, iv stand, suction, patient lift, etc,.',
    brand: 'ComfortCare',
    image: 'https://picsum.photos/seed/hospital-bed-manual/600/400',
    description: 'Manual adjustable hospital bed with mechanical controls. Perfect for budget-conscious care facilities.',
    longDescription: 'ComfortCare Manual Hospital Bed features smooth mechanical adjustment with easy-to-use hand cranks.',
    specifications: {
      type: 'Manual Adjustable',
      mattress: 'Included (120cm x 200cm)',
      rails: 'Detachable',
      weight: '150 kg',
      adjustment: 'Hand crank'
    },
    features: [
      'Type: Manual',
      'Manual height adjustment',
      'Head and foot section adjustable',
      'Safety rails included',
      'Comfortable foam mattress',
      'Hand crank controls',
      'Durable steel frame'
    ]
  },
  {
    id: 17,
    name: 'Hospital Bed - ICU Premium',
    commonName: 'Hospital Bed',
    types: ['Electric ICU'],
    category: 'Equipment',
    carddisc: 'hospital bed, iv stand, suction, patient lift, etc,.',
    brand: 'MediCare Pro',
    image: 'https://picsum.photos/seed/hospital-bed-icu/600/400',
    description: 'Advanced ICU hospital bed with integrated monitoring systems and advanced safety features.',
    longDescription: 'MediCare Pro ICU Bed is equipped with advanced features for critical care patients.',
    specifications: {
      type: 'Electric ICU',
      mattress: 'Anti-pressure (120cm x 200cm)',
      rails: 'Side rails with sensors',
      power: '220V',
      weight: '200 kg',
      features: 'Built-in scales'
    },
    features: [
      'Type: Electric ICU',
      'Integrated weight scale',
      'Auto horizontal bed function',
      'Fall prevention sensors',
      'Trendelenburg capability',
      'Advanced remote with preset positions',
      'Backup battery system'
    ]
  },
  {
    id: 18,
    name: 'Hospital Bed - Low Bed',
    commonName: 'Hospital Bed',
    types: ['Electric Low'],
    category: 'Equipment',
    carddisc: 'hospital bed, iv stand, suction, patient lift, etc,.',
    brand: 'SafeRest',
    image: 'https://picsum.photos/seed/hospital-bed-low/600/400',
    description: 'Low-height hospital bed designed for patients at risk of falls with excellent accessibility.',
    longDescription: 'SafeRest Low Bed reduces fall risk with minimal height and maximum accessibility for elderly patients.',
    specifications: {
      type: 'Electric Low',
      mattress: 'Included (120cm x 200cm)',
      rails: '4-section rails',
      power: '220V',
      minHeight: '25cm',
      weight: '170 kg'
    },
    features: [
      'Type: Electric Low',
      'Ultra-low minimum height design',
      'Prevents patient falls',
      'Easy transfer access',
      'Full side rail protection',
      'Electric height adjustment',
      'Anti-glide floor protectors'
    ]
  },
  {
    id: 19,
    name: 'Hospital Bed - Bariatric',
    commonName: 'Hospital Bed',
    types: ['Electric Bariatric'],
    category: 'Equipment',
    carddisc: 'hospital bed, iv stand, suction, patient lift, etc,.',
    brand: 'HeavyDuty Care',
    image: 'https://picsum.photos/seed/hospital-bed-bariatric/600/400',
    description: 'Extra-wide and reinforced bariatric hospital bed for patients with special needs.',
    longDescription: 'HeavyDuty Care Bariatric Bed is specifically designed for patients requiring extra-wide sleeping surfaces.',
    specifications: {
      type: 'Electric Bariatric',
      mattress: 'Reinforced (150cm x 200cm)',
      rails: 'Heavy-duty detachable',
      power: '220V',
      capacity: '300 kg',
      weight: '220 kg'
    },
    features: [
      'Type: Electric Bariatric',
      'Extra-wide 150cm surface',
      '300kg capacity',
      'Reinforced steel frame',
      'Electric height and tilt',
      'Heavy-duty side rails',
      'Anti-slip mattress system'
    ]
  },
  {
    id: 20,
    name: 'IV Stand - Adjustable',
commonName: 'IV Stand',
    types: ['Adjustable'],
    category: 'Equipment',
    carddisc: 'hospital bed, iv stand, suction, patient lift, etc,.',
    brand: 'CareEquip',
    image: 'https://picsum.photos/seed/hospital-iv/600/400',
    description: 'Adjustable stainless steel IV stand with multiple hooks. Suitable for hospitals and clinics.',
    longDescription: 'CareEquip IV Stand is made from durable stainless steel with adjustable height.',
    specifications: {
      material: 'Stainless Steel',
      height: '60-200cm (adjustable)',
      weight: '8 kg',
      hooks: '6 hooks',
      baseSize: '50cm diameter'
    },
    features: [
      'Type: Adjustable',
      'Adjustable height from 60-200cm',
      'Heavy-duty stainless steel construction',
      '6 multi-use hooks',
      'Stable weighted base',
      'Easy to assemble',
      'Portable and lightweight'
    ]
  },
  {
    id: 21,
    name: 'Suction Machine - Medical',
commonName: 'Suction Machine',
    types: ['Electric'],
    category: 'Equipment',
    carddisc: 'hospital bed, iv stand, suction, patient lift, etc,.',
    brand: 'VacuumCare',
    image: 'https://picsum.photos/seed/hospital-suction/600/400',
    description: 'Electric suction machine for respiratory secretion removal.',
    longDescription: 'VacuumCare Suction Machine is used in hospitals and home care for airway management.',
    specifications: {
      power: '110W',
      suction: '0-60 kPa',
      tankCapacity: '0.5L',
      weight: '3.5 kg',
      warranty: '2 Years'
    },
    features: [
      'Type: Electric',
      'Variable suction control',
      'Quiet operation',
      'Easy to clean',
      'Portable design',
      'Multiple catheter sizes compatible',
      'Safety overflow protection'
    ]
  },
  {
    id: 22,
    name: 'Patient Lift - Hydraulic',
commonName: 'Patient Lift',
    types: ['Hydraulic'],
    category: 'Equipment',
    carddisc: 'hospital bed, iv stand, suction, patient lift, etc,.',
    brand: 'StrongLift',
    image: 'https://picsum.photos/seed/hospital-lift/600/400',
    description: 'Hydraulic patient lift for safe patient transfers and mobilization.',
    longDescription: 'StrongLift Patient Lift reduces strain on caregivers with smooth hydraulic operation.',
    specifications: {
      type: 'Hydraulic Lift',
      capacity: '180 kg',
      height: '80-220cm (adjustable)',
      weight: '45 kg',
      material: 'Steel'
    },
    features: [
      'Type: Hydraulic',
      'Maximum capacity 180kg',
      'Smooth hydraulic operation',
      'Adjustable for all heights',
      'Easy-to-use hand pump',
      'Safety locking mechanism',
      'Includes sling'
    ]
  },

  // HYGIENE PRODUCTS
  {
    id: 23,
    name: 'Hand Sanitizer (500ml)',
commonName: 'Hand Sanitizer',
    types: ['Gel'],
    category: 'Hygiene',
    carddisc: 'sanitizer, wipes, soap, swabs, etc,.',
    brand: 'PureHands',
    image: 'https://picsum.photos/seed/hospital-sani/600/400',
    description: '70% alcohol hand sanitizer with moisturizing agents. Kills 99.9% germs.',
    longDescription: 'PureHands Hand Sanitizer is a 70% alcohol-based formula that kills 99.9% of germs and bacteria.',
    specifications: {
      volume: '500ml',
      alcohol: '70% Ethanol',
      germsKilled: '99.9%',
      application: 'Pump dispenser',
      skinFriendly: 'Yes'
    },
    features: [
      'Type: Gel',
      '70% alcohol-based formula',
      'Kills 99.9% of germs',
      'Moisturizing with aloe vera',
      'Fast drying',
      'Non-sticky formula',
      'Dermatologist tested'
    ]
  },
  {
    id: 24,
    name: 'Disinfectant Wipes (Box of 100)',
commonName: 'Disinfectant Wipes',
    types: ['Wipes'],
    category: 'Hygiene',
    carddisc: 'sanitizer, wipes, soap, swabs, etc,.',
    brand: 'CleanCare',
    image: 'https://picsum.photos/seed/hospital-wipes/600/400',
    description: 'Alcohol-based disinfectant wipes for surface cleaning and sanitization.',
    longDescription: 'CleanCare Disinfectant Wipes kill 99.9% of bacteria and viruses in seconds.',
    specifications: {
      quantity: '100 sheets',
      material: 'Non-woven fabric',
      alcohol: '70% Isopropyl',
      size: '20cm x 20cm'
    },
    features: [
      'Type: Wipes',
      'Kills 99.9% of germs',
      'Fast acting formula',
      'Pre-moistened wipes',
      'Safe for all surfaces',
      'Pleasant fragrance',
      'Individually wrapped'
    ]
  },
  {
    id: 25,
    name: 'Medical Soap (Antiseptic)',
commonName: 'Medical Soap',
    types: ['Antiseptic'],
    category: 'Hygiene',
    carddisc: 'sanitizer, wipes, soap, swabs, etc,.',
    brand: 'MedClean',
    image: 'https://picsum.photos/seed/hospital-soap/600/400',
    description: 'Medicated antiseptic soap for healthcare professionals and patients.',
    longDescription: 'MedClean Antiseptic Soap contains chlorhexidine for superior antimicrobial protection.',
    specifications: {
      volume: '1L',
      activeIngredient: 'Chlorhexidine 4%',
      type: 'Liquid soap',
      pH: '5.5-7.5'
    },
    features: [
      'Type: Antiseptic',
      'Contains Chlorhexidine',
      'Effective against bacteria and fungi',
      'Non-irritating formula',
      'Suitable for frequent washing',
      'Economical pump dispenser',
      'Pleasant scent'
    ]
  },
  {
    id: 26,
    name: 'Alcohol Wipes (Box of 200)',
commonName: 'Alcohol Wipes',
    types: ['Sterile'],
    category: 'Hygiene',
    carddisc: 'sanitizer, wipes, soap, swabs, etc,.',
    brand: 'SwabCare',
    image: 'https://picsum.photos/seed/hospital-swab/600/400',
    description: 'Sterile alcohol wipes for medical and laboratory use.',
    longDescription: 'SwabCare Alcohol Wipes are individually packaged sterile pads for injection sites and wounds.',
    specifications: {
      quantity: '200 pieces',
      alcohol: '70% Isopropyl',
      sterile: 'Yes',
      sizePerPad: '5cm x 5cm'
    },
    features: [
      'Type: Sterile',
      '70% Isopropyl alcohol',
      'Individually packaged',
      'Fast drying',
      'Suitable for injections',
      'Safe for sensitive skin',
      'Medical grade quality'
    ]
  },

  // SUPPORTS PRODUCTS
  {
    id: 27,
    name: 'Arm Sling Pouch',
commonName: 'Arm Sling',
    types: ['Support'],
    category: 'Supports',
    carddisc: 'arm sling, knee brace, collar, back support, etc,.',
    brand: 'OrthoFlex',
    image: 'https://picsum.photos/seed/hospital-sling/600/400',
    description: 'Ergonomic arm sling for post-operative support and injury recovery.',
    longDescription: 'OrthoFlex Arm Sling Pouch provides comfortable support for arm injuries and post-surgical recovery.',
    specifications: {
      material: 'Neoprene and cotton',
      sizes: 'XS, S, M, L, XL, XXL',
      weight: '200g',
      color: 'Black',
      washable: 'Yes'
    },
    features: [
      'Type: Support',
      'Ergonomic design for maximum comfort',
      'Adjustable shoulder strap',
      'Neoprene and cotton material',
      'Machine washable',
      'One size fits most',
      'Suitable for all arm sizes'
    ]
  },
  {
    id: 28,
    name: 'Knee Brace - Compression',
commonName: 'Knee Brace',
    types: ['Compression'],
    category: 'Supports',
    carddisc: 'arm sling, knee brace, collar, back support, etc,.',
    brand: 'KneeGuard',
    image: 'https://picsum.photos/seed/hospital-knee/600/400',
    description: 'Compression knee brace for support during activities and rehabilitation.',
    longDescription: 'KneeGuard Compression Knee Brace provides targeted support for knee pain and swelling.',
    specifications: {
      material: 'Neoprene',
      compression: 'Medium',
      sizes: 'S, M, L, XL',
      color: 'Black',
      washable: 'Yes'
    },
    features: [
      'Type: Compression',
      'Medium compression level',
      'Neoprene material for warmth',
      'Open patella design',
      'Adjustable straps',
      'Machine washable',
      'Suitable for daily wear'
    ]
  },
  {
    id: 29,
    name: 'Cervical Collar - Neck Support',
commonName: 'Cervical Collar',
    types: ['Soft'],
    category: 'Supports',
    carddisc: 'arm sling, knee brace, collar, back support, etc,.',
    brand: 'NeckCare',
    image: 'https://picsum.photos/seed/hospital-cervical/600/400',
    description: 'Soft cervical collar for neck support and pain relief.',
    longDescription: 'NeckCare Cervical Collar provides gentle support for neck pain and injury recovery.',
    specifications: {
      material: 'Polyurethane foam',
      sizes: 'S, M, L',
      color: 'Beige',
      adjustable: 'Yes'
    },
    features: [
      'Type: Soft',
      'Polyurethane foam construction',
      'Adjustable for proper fit',
      'Breathable material',
      'Easy to put on and remove',
      'Lightweight design',
      'Washable cover'
    ]
  },
  {
    id: 30,
    name: 'Back Support Belt',
commonName: 'Back Support Belt',
    types: ['Lumbar'],
    category: 'Supports',
    carddisc: 'arm sling, knee brace, collar, back support, etc,.',
    brand: 'SpineAid',
    image: 'https://picsum.photos/seed/hospital-back/600/400',
    description: 'Lumbar back support belt for posture correction and pain relief.',
    longDescription: 'SpineAid Back Support Belt provides lumbar support for chronic pain and injury prevention.',
    specifications: {
      material: 'Neoprene with steel stays',
      sizes: 'S, M, L, XL, XXL',
      adjustable: 'Yes',
      color: 'Black',
      washable: 'Yes'
    },
    features: [
      'Type: Lumbar',
      'Neoprene with steel spinal stays',
      'Adjustable compression',
      'Breathable design',
      'Posture correction support',
      'Machine washable',
      'Suitable for daily wear'
    ]
  },

  // DIAGNOSTICS PRODUCTS
  {
    id: 31,
    name: 'Blood Pressure Monitor - Digital',
    commonName: 'Blood Pressure Monitor',
    types: ['Digital'],
    category: 'Diagnostics',
    carddisc: 'bp monitor, thermometer, glucometer, ecg, etc,.',
    brand: 'HealthCheck',
    image: 'https://picsum.photos/seed/hospital-bp-monitor/600/400',
    description: 'Automatic digital blood pressure monitor with large LCD display. Perfect for home monitoring.',
    longDescription: 'HealthCheck Digital Blood Pressure Monitor provides accurate readings with one-touch operation. Features irregular heartbeat detection and memory for multiple users.',
    specifications: {
      type: 'Automatic Digital',
      measurement: 'Systolic, Diastolic, Pulse',
      accuracy: '±3 mmHg',
      memory: '120 readings',
      display: 'Large LCD',
      cuffSize: '22-42 cm'
    },
    features: [
      'Type: Digital',
      'One-touch automatic operation',
      'Irregular heartbeat detector',
      'Large backlit LCD display',
      '120 reading memory capacity',
      'Average of last 3 readings',
      'WHO indicator for result classification',
      'Includes carrying case'
    ]
  },
  {
    id: 32,
    name: 'Blood Pressure Monitor - Manual',
    commonName: 'Blood Pressure Monitor',
    types: ['Manual'],
    category: 'Diagnostics',
    carddisc: 'bp monitor, thermometer, glucometer, ecg, etc,.',
    brand: 'MediPro',
    image: 'https://picsum.photos/seed/hospital-bp-manual/600/400',
    description: 'Professional aneroid sphygmomanometer with stethoscope for accurate blood pressure measurement.',
    longDescription: 'MediPro Manual Blood Pressure Monitor is a professional-grade device preferred by healthcare professionals for accurate readings.',
    specifications: {
      type: 'Aneroid Manual',
      measurement: 'Systolic, Diastolic',
      accuracy: '±2 mmHg',
      cuffSize: '25-40 cm',
      material: 'Latex-free',
      includes: 'Stethoscope'
    },
    features: [
      'Type: Manual',
      'Professional aneroid gauge',
      'Includes quality stethoscope',
      'Latex-free cuff material',
      'Durable metal construction',
      'Easy-to-read dial',
      'Adjustable cuff for all arm sizes',
      'Carrying case included'
    ]
  },
  {
    id: 33,
    name: 'Thermometer - Infrared',
    commonName: 'Thermometer',
    types: ['Infrared'],
    category: 'Diagnostics',
    carddisc: 'bp monitor, thermometer, glucometer, ecg, etc,.',
    brand: 'TempScan',
    image: 'https://picsum.photos/seed/hospital-thermometer-ir/600/400',
    description: 'Non-contact infrared thermometer for instant temperature measurement. Ideal for all ages.',
    longDescription: 'TempScan Infrared Thermometer provides accurate temperature readings in 1 second without physical contact, making it safe and hygienic.',
    specifications: {
      type: 'Non-contact Infrared',
      accuracy: '±0.2°C',
      measurementTime: '1 second',
      distance: '3-5 cm',
      memory: '50 readings',
      display: 'LCD with backlight'
    },
    features: [
      'Type: Infrared',
      'Non-contact measurement in 1 second',
      'Fever alarm with color indicator',
      'Forehead and object mode',
      'Memory stores 50 readings',
      'Silent mode for sleeping babies',
      'Auto shut-off to save battery',
      'CE and FDA approved'
    ]
  },
  {
    id: 34,
    name: 'Thermometer - Digital',
    commonName: 'Thermometer',
    types: ['Digital'],
    category: 'Diagnostics',
    carddisc: 'bp monitor, thermometer, glucometer, ecg, etc,.',
    brand: 'QuickTemp',
    image: 'https://picsum.photos/seed/hospital-thermometer-digital/600/400',
    description: 'Fast and accurate digital thermometer for oral, rectal, and underarm use.',
    longDescription: 'QuickTemp Digital Thermometer delivers precise readings in 10 seconds with waterproof design for easy cleaning.',
    specifications: {
      type: 'Digital Contact',
      accuracy: '±0.1°C',
      measurementTime: '10 seconds',
      waterproof: 'Yes',
      battery: 'Replaceable LR41',
      memory: 'Last reading'
    },
    features: [
      'Type: Digital',
      'Fast 10-second measurement',
      'Waterproof and washable',
      'Flexible tip for comfort',
      'Fever beep alert',
      'Auto shut-off',
      'Oral, rectal, underarm use',
      'Protective storage case'
    ]
  },
  {
    id: 35,
    name: 'Glucometer - Blood Sugar Monitor',
    commonName: 'Glucometer',
    types: ['Digital'],
    category: 'Diagnostics',
    carddisc: 'bp monitor, thermometer, glucometer, ecg, etc,.',
    brand: 'GlucoCheck',
    image: 'https://picsum.photos/seed/hospital-glucometer/600/400',
    description: 'Blood glucose monitoring system with test strips for diabetes management.',
    longDescription: 'GlucoCheck Glucometer provides accurate blood sugar readings in 5 seconds with minimal blood sample required.',
    specifications: {
      type: 'Blood Glucose Monitor',
      measurementTime: '5 seconds',
      sampleSize: '0.5 μL',
      memory: '500 readings',
      display: 'Large LCD',
      includes: '50 test strips, 50 lancets'
    },
    features: [
      'Type: Digital',
      'Fast 5-second results',
      'Small 0.5 μL blood sample',
      'Stores 500 test results with date/time',
      '7, 14, 30-day averages',
      'Pre/post meal markers',
      'Includes lancing device and lancets',
      'Free mobile app connectivity'
    ]
  },
  {
    id: 36,
    name: 'Stethoscope - Cardiology',
    commonName: 'Stethoscope',
    types: ['Cardiology'],
    category: 'Diagnostics',
    carddisc: 'bp monitor, thermometer, glucometer, ecg, etc,.',
    brand: 'CardioSound',
    image: 'https://picsum.photos/seed/hospital-stethoscope-cardio/600/400',
    description: 'Professional cardiology stethoscope for superior acoustic performance.',
    longDescription: 'CardioSound Cardiology Stethoscope delivers exceptional sound quality with tunable diaphragm for both high and low frequency sounds.',
    specifications: {
      type: 'Dual-Head Cardiology',
      tubeLength: '69 cm',
      material: 'Stainless steel',
      diaphragm: 'Tunable',
      weight: '180g',
      warranty: '5 years'
    },
    features: [
      'Type: Cardiology',
      'Tunable diaphragm technology',
      'Superior acoustic sensitivity',
      'Double-lumen tubing',
      'Comfortable sealing eartips',
      'Non-chill rim for patient comfort',
      'Stainless steel chest piece',
      'Antimicrobial surface treatment'
    ]
  },
  {
    id: 37,
    name: 'Stethoscope - Classic',
    commonName: 'Stethoscope',
    types: ['Classic'],
    category: 'Diagnostics',
    carddisc: 'bp monitor, thermometer, glucometer, ecg, etc,.',
    brand: 'MediSound',
    image: 'https://picsum.photos/seed/hospital-stethoscope-classic/600/400',
    description: 'Lightweight dual-head stethoscope for general diagnostic use.',
    longDescription: 'MediSound Classic Stethoscope offers reliable performance for routine examinations at an affordable price.',
    specifications: {
      type: 'Dual-Head Classic',
      tubeLength: '55 cm',
      material: 'Aluminum',
      weight: '120g',
      warranty: '2 years'
    },
    features: [
      'Type: Classic',
      'Dual-head design (adult/pediatric)',
      'Lightweight aluminum chest piece',
      'Comfortable binaural construction',
      'Soft-sealing ear tips',
      'Durable PVC tubing',
      'Available in multiple colors',
      'Affordable quality'
    ]
  },
  {
    id: 38,
    name: 'ECG Machine - 12 Channel',
    commonName: 'ECG Machine',
    types: ['12 Channel'],
    category: 'Diagnostics',
    carddisc: 'bp monitor, thermometer, glucometer, ecg, etc,.',
    brand: 'CardioTech',
    image: 'https://picsum.photos/seed/hospital-ecg-12/600/400',
    description: 'Professional 12-channel ECG machine with digital display and thermal printer.',
    longDescription: 'CardioTech 12-Channel ECG Machine provides comprehensive cardiac diagnostics with automatic interpretation and high-resolution recording.',
    specifications: {
      type: '12-Lead Digital ECG',
      channels: '12 simultaneous',
      display: '8-inch color LCD',
      printer: 'Built-in thermal',
      storage: '500 records',
      connectivity: 'USB, LAN'
    },
    features: [
      'Type: 12 Channel',
      '12 simultaneous lead recording',
      'Auto interpretation and analysis',
      'High-resolution color display',
      'Built-in thermal printer',
      'Rechargeable battery for portability',
      'Network connectivity for EMR',
      'Includes all cables and electrodes'
    ]
  },
  {
    id: 39,
    name: 'ECG Machine - 3 Channel',
    commonName: 'ECG Machine',
    types: ['3 Channel'],
    category: 'Diagnostics',
    carddisc: 'bp monitor, thermometer, glucometer, ecg, etc,.',
    brand: 'HeartMonitor',
    image: 'https://picsum.photos/seed/hospital-ecg-3/600/400',
    description: 'Compact 3-channel ECG machine ideal for clinics and small medical facilities.',
    longDescription: 'HeartMonitor 3-Channel ECG provides reliable cardiac monitoring in a portable, easy-to-use package.',
    specifications: {
      type: '3-Lead Digital ECG',
      channels: '3 simultaneous',
      display: '5.7-inch LCD',
      printer: 'Thermal printer',
      storage: '100 records',
      battery: 'Rechargeable'
    },
    features: [
      'Type: 3 Channel',
      'Compact and portable design',
      'Easy operation with one button',
      'Auto measurement and diagnosis',
      'Built-in rechargeable battery',
      'LCD display with backlight',
      'Thermal printing',
      'Cost-effective solution'
    ]
  },
  {
    id: 40,
    name: 'Weight Scale - Digital',
    commonName: 'Weight Scale',
    types: ['Digital'],
    category: 'Diagnostics',
    carddisc: 'bp monitor, thermometer, glucometer, ecg, etc,.',
    brand: 'WeighRight',
    image: 'https://picsum.photos/seed/hospital-scale-digital/600/400',
    description: 'Professional digital weight scale with BMI calculation and high capacity.',
    longDescription: 'WeighRight Digital Scale provides accurate weight and BMI measurements with easy-to-read display and high weight capacity.',
    specifications: {
      type: 'Digital Platform Scale',
      capacity: '200 kg',
      accuracy: '±100g',
      display: 'Large LCD',
      platform: '30cm x 30cm',
      power: 'Battery or AC adapter'
    },
    features: [
      'Type: Digital',
      'High capacity up to 200kg',
      'Large anti-slip platform',
      'Automatic BMI calculation',
      'Large backlit display',
      'Auto on/off function',
      'Low battery indicator',
      'Durable tempered glass surface'
    ]
  },
];

export const getCategories = () => {
  const set = new Set(PRODUCTS.map(p => p.category));
  return Array.from(set).sort();
};

export const getBrands = () => {
  const set = new Set(PRODUCTS.map(p => p.brand));
  return Array.from(set).sort();
};

export const getProductById = (id) => {
  return PRODUCTS.find(p => p.id === parseInt(id));
};

export const getRelatedProducts = (id, category, limit = 4) => {
  return PRODUCTS.filter(p => p.category === category && p.id !== parseInt(id)).slice(0, limit);
};
