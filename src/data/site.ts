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
  legalName: 'SOLUCAO RENTAL LTDA - ME',
  phone: '(85) 98889-2958',
  whatsapp: '5585988892958',
  whatsappLabel: '(85) 98889-2958',
  email: '',
  salesEmail: '',
  city: 'Fortaleza - CE',
  address: 'R. Gen. Onofre, 132, Loja 03 - Mondubim, Fortaleza - CE, CEP 60762-170',
  description:
    'Empresa sediada em Fortaleza/CE, com foco em locação de máquinas e equipamentos para construção e fornecimento de telas fachadeiras para obras.',
  heroText:
    'Locação de máquinas e equipamentos para construção, telas fachadeiras e atendimento para obras em Fortaleza e região.',
  instagram: '',
  cnpj: '17.264.015/0001-60',
  foundationDate: '05/12/2012',
  status: 'Ativa',
  legalNature: '206 | Sociedade Empresária Limitada',
  branchType: 'Matriz'
};

export const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/locacao', label: 'Locação' },
  { href: '/telas', label: 'Telas' },
  { href: '/portfolio', label: 'Serviços' },
  { href: '/quem-somos', label: 'Quem Somos' },
  { href: '/blog', label: 'Conteúdo' },
  { href: '/contato', label: 'Contato' }
];

export const services: Service[] = [
  {
    title: 'Locação de Equipamentos',
    description: 'Atividade principal da empresa, com foco em máquinas e equipamentos para construção sem operador.',
    href: '/locacao',
    icon: 'grid'
  },
  {
    title: 'Telas Fachadeiras',
    description: 'Fornecimento de telas fachadeiras para obras, com foco em proteção e organização do canteiro.',
    href: '/telas',
    icon: 'shield'
  },
  {
    title: 'Manutenção de Equipamentos',
    description: 'Serviços de manutenção e reparação de máquinas e equipamentos de terraplenagem, pavimentação e construção.',
    href: '/portfolio',
    icon: 'tools'
  },
  {
    title: 'Atendimento para Obras',
    description: 'Apoio comercial para locação, telas fachadeiras e demandas operacionais em Fortaleza e região.',
    href: '/contato',
    icon: 'truck'
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
  { title: 'Locação para Construção', subtitle: 'Máquinas e equipamentos para obras e operações de apoio no canteiro.' },
  { title: 'Manutenção Técnica', subtitle: 'Reparação de equipamentos de terraplenagem, pavimentação e construção.' },
  { title: 'Construção de Edifícios', subtitle: 'Atuação complementar em obras civis e execução de estruturas.' },
  { title: 'Rodovias e Ferrovias', subtitle: 'Serviços ligados à construção e apoio em infraestrutura viária.' },
  { title: 'Urbanização', subtitle: 'Atendimento para ruas, praças, calçadas e instalações correlatas.' },
  { title: 'Estruturas Metálicas', subtitle: 'Montagem e apoio para frentes de obra com demanda estrutural.' }
];

export const blogPosts: BlogPost[] = [
  {
    date: '10 Jul 2026',
    title: 'Quando vale mais a pena alugar equipamentos para construção',
    excerpt: 'Uma visão prática sobre disponibilidade, custo operacional e agilidade para obras de diferentes portes.'
  },
  {
    date: '10 Jul 2026',
    title: 'Por que manutenção de equipamentos impacta o ritmo da obra',
    excerpt: 'Entenda como a manutenção correta ajuda a reduzir paradas e melhora a previsibilidade operacional.'
  },
  {
    date: '10 Jul 2026',
    title: 'Serviços complementares que apoiam operações de construção',
    excerpt: 'Da locação à infraestrutura, veja como frentes integradas podem dar mais fluidez ao andamento da obra.'
  }
];

export const companyHighlights = [
  { value: 'Desde 2012', label: 'Fundação da empresa' },
  { value: 'CNPJ Ativo', label: 'Situação cadastral' },
  { value: 'Fortaleza/CE', label: 'Sede da matriz' }
];

export const telasFeatures = [
  'Aplicacao em fachadas de obras e areas de protecao',
  'Material pensado para uso em canteiros e ambientes externos',
  'Atendimento para diferentes etapas e portes de obra',
  'Solicitacao de informacoes e orcamento por WhatsApp'
];

export const telasBenefits = [
  'Protecao visual e organizacao do ambiente de obra',
  'Aplicacao em fachadas com foco em apoio ao canteiro',
  'Atendimento local em Fortaleza e regiao',
  'Canal direto para consulta comercial e disponibilidade'
];

export const diferenciais = [
  {
    title: 'Empresa Ativa',
    description: 'Cadastro ativo e operação formalizada com base em Fortaleza, no Ceará.'
  },
  {
    title: 'Base Local',
    description: 'Atendimento com presença na capital cearense, facilitando contato e operação regional.'
  },
  {
    title: 'Atuação Diversificada',
    description: 'Combina locação de equipamentos, manutenção e frentes complementares de construção.'
  },
  {
    title: 'Contato Direto',
    description: 'Canal rápido por WhatsApp para pedidos de informação e orçamento inicial.'
  }
];
