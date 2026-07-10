export type NavItem = {
  href: string;
  label: string;
};

export type Service = {
  title: string;
  description: string;
  href: string;
  icon: 'shield' | 'tools' | 'truck' | 'grid';
};

export type Equipment = {
  title: string;
  description: string;
};

export type PortfolioItem = {
  title: string;
  subtitle: string;
};

export type BlogPost = {
  date: string;
  title: string;
  excerpt: string;
};

export const site = {
  name: 'Solução Rental',
  legalName: 'Solução Rental LTDA.',
  phone: '(85) 3333-3333',
  whatsapp: '5585999999999',
  whatsappLabel: '(85) 99999-9999',
  email: 'contato@solucaorental.com.br',
  salesEmail: 'comercial@solucaorental.com.br',
  city: 'Fortaleza, CE',
  address: 'Av. Exemplo, 1234 - Bairro, Fortaleza - CE, CEP 60000-000',
  description:
    'Especialista em locação de equipamentos, telas fachadeiras e sistemas de segurança para obras verticais em Fortaleza.',
  heroText:
    'Construções, equipamentos, telas fachadeiras e sistemas de segurança para obras verticais.',
  instagram: 'https://instagram.com/riandte'
};

export const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/locacao', label: 'Locação' },
  { href: '/telas', label: 'Telas' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/quem-somos', label: 'Quem Somos' },
  { href: '/blog', label: 'Blog' },
  { href: '/contato', label: 'Contato' }
];

export const services: Service[] = [
  {
    title: 'Venda de Telas',
    description: 'Telas fachadeiras de alta resistência para proteção de obras e proteção perimetral.',
    href: '/telas',
    icon: 'grid'
  },
  {
    title: 'Instalação de Telas',
    description: 'Equipe especializada para instalação segura, rápida e alinhada às normas de obra.',
    href: '/telas',
    icon: 'tools'
  },
  {
    title: 'Locação de Equipamentos',
    description: 'Equipamentos para construção civil com manutenção em dia e suporte comercial ágil.',
    href: '/locacao',
    icon: 'truck'
  },
  {
    title: 'Instalação de SLQA',
    description: 'Sistemas limitadores de queda de altura para reforçar a segurança coletiva do canteiro.',
    href: '/telas',
    icon: 'shield'
  }
];

export const equipment: Equipment[] = [
  {
    title: 'Andaimes',
    description: 'Andaimes tubulares e fachadeiros de alta resistência e montagem eficiente.'
  },
  {
    title: 'Escoras Metálicas',
    description: 'Escoras ajustáveis para lajes e vigas com segurança no escoramento.'
  },
  {
    title: 'Betoneiras',
    description: 'Betoneiras de 400L elétricas ou a diesel para mistura de concreto.'
  },
  {
    title: 'Máquinas de Solda',
    description: 'Inversoras de solda portáteis e robustas para serviços de serralheria.'
  },
  {
    title: 'Rosqueadeiras',
    description: 'Soluções para tubos galvanizados e conduítes em instalações hidráulicas.'
  },
  {
    title: 'Vibradores para Concreto',
    description: 'Essenciais para garantir densidade e resistência do concreto armado.'
  },
  {
    title: 'Linha de Vida',
    description: 'Sistemas completos de proteção para trabalhos em altura.'
  },
  {
    title: 'Perfil Metálico "I"',
    description: 'Vigas metálicas para estruturação e suporte de grandes cargas.'
  }
];

export const portfolioItems: PortfolioItem[] = [
  { title: 'Fachada Magis', subtitle: 'Instalação completa de telas fachadeiras.' },
  { title: 'Fachada Simpex', subtitle: 'Sistema SLQA e proteção periférica.' },
  { title: 'Fachada Diagonal', subtitle: 'Locação de andaimes e escoras.' },
  { title: 'Residencial Meireles', subtitle: 'Proteção de fachada e bandeja.' },
  { title: 'Centro Comercial Sul', subtitle: 'Locação de betoneiras e equipamentos.' },
  { title: 'Complexo Industrial', subtitle: 'Linha de vida e segurança.' }
];

export const blogPosts: BlogPost[] = [
  {
    date: '12 Dez 2024',
    title: 'A importância da NR-18 para obras verticais',
    excerpt: 'Entenda como as normas regulamentadoras ajudam a reduzir acidentes e reforçam a rotina de segurança.'
  },
  {
    date: '05 Nov 2024',
    title: 'Telas Fachadeiras: segurança ou estética?',
    excerpt: 'Veja como as telas fachadeiras unem proteção contra detritos e melhor apresentação do canteiro.'
  },
  {
    date: '20 Out 2024',
    title: 'Locação x compra de equipamentos',
    excerpt: 'Uma leitura prática sobre custo-benefício, prazo de obra e ganho operacional na locação.'
  }
];

export const companyHighlights = [
  { value: '+30', label: 'Anos de experiência' },
  { value: '+8.000m²', label: 'De depósito e logística' },
  { value: '100%', label: 'Compromisso com segurança' }
];

export const telasFeatures = [
  'Alta resistência a impactos',
  'Proteção UV',
  'Instalação por equipe qualificada',
  'Diversas medidas e malhas'
];

export const slqaFeatures = [
  'Estruturas metálicas robustas',
  'Redes de segurança certificadas',
  'Montagem e desmontagem inclusas',
  'Manutenção periódica'
];

export const diferenciais = [
  {
    title: 'Normas Técnicas',
    description: 'Todos os serviços seguem rigorosamente a NR-18 e a NR-35.'
  },
  {
    title: 'Equipe Capacitada',
    description: 'Profissionais treinados e experientes em trabalho em altura.'
  },
  {
    title: 'Qualidade',
    description: 'Materiais de primeira linha para garantir durabilidade e confiança.'
  },
  {
    title: 'Agilidade',
    description: 'Atendimento rápido e comprometido com o cronograma da obra.'
  }
];
