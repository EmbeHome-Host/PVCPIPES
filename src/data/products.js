import blueCasingPipe from '../assets/BlueCasingPipe.png'
import electricalConduitPipe from '../assets/ElectricalConduitPipe.png'
import pvcPressurePipe from '../assets/PVCPressurePipe.png'
import upvcPipe from '../assets/UPVCPipe.png'

export const productCategories = [
  'All',
  'Electrical Conduits',
  'UPVC',
  'PVC',
  'Casing',
]

export const products = [
  {
    id: 1,
    category: 'Electrical Conduits',
    name: 'Electrical Conduit Pipe',
    sizes: '19 mm, 25 mm',
    pressure: 'Standard duty',
    description: 'Reliable conduit pipes for protected wiring applications.',
    image: electricalConduitPipe,
  },
  {
    id: 2,
    category: 'UPVC',
    name: 'UPVC Pipe',
    sizes: '0.5", 0.75", 1", 1.25", 1.5", 2"',
    pressure: 'High quality finish',
    description: 'UPVC range for domestic and building plumbing requirements.',
    image: upvcPipe,
  },
  {
    id: 3,
    category: 'PVC',
    name: 'PVC Pressure Pipe',
    sizes: '20 mm OD (0.5") to 200 mm (8")',
    pressure: '2.5, 4, 6, 10',
    description: 'Pressure class PVC pipes for long life water flow systems.',
    image: pvcPressurePipe,
  },
  {
    id: 4,
    category: 'Casing',
    name: 'Blue Casing Pipe',
    sizes: '4.5", 5", 6", 7"',
    pressure: 'Heavy duty',
    description: 'Blue casing pipes designed for borewell installations.',
    image: blueCasingPipe,
  },

]
