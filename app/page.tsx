"use client"

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Anchor,
  Ship,
  Settings,
  TrendingUp,
  DollarSign,
  Users,
  MapPin,
  Download,
  BarChart3,
  PieChart,
  Calendar,
  CheckCircle,
  Scale,
  FileText,
  Calculator,
  BadgeIcon as Certificate,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import Link from "next/link"

export default function TontonShipyard() {
  const [language, setLanguage] = useState("PT")

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/images/tonton-logo.png"
                alt="TONTON Shipyard"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-[#0B3C5D] hover:text-[#16B4C6] transition-colors">
                Home
              </Link>
              <Link href="#mercado" className="text-[#0B3C5D] hover:text-[#16B4C6] transition-colors">
                Mercado
              </Link>
              <Link href="#servicos" className="text-[#0B3C5D] hover:text-[#16B4C6] transition-colors">
                Serviços
              </Link>
              <Link href="#legal-tax" className="text-[#0B3C5D] hover:text-[#16B4C6] transition-colors">
                Jurídico & Fiscal
              </Link>
              <Link href="#financeiro" className="text-[#0B3C5D] hover:text-[#16B4C6] transition-colors">
                Financeiro
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent border border-[#0B3C5D] rounded px-2 py-1 text-sm"
              >
                <option value="PT">PT</option>
                <option value="EN">EN</option>
              </select>
              <Link
                href="https://docs.google.com/document/d/1qF-UaBgMnlguAZe78Abp_Yynby_Tt54v/edit?usp=sharing&ouid=116797172657187127284&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#16B4C6] hover:bg-[#0B3C5D] text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                Plano de Negócios
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#0B3C5D] to-[#16B4C6]"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            TONTON SHIPYARD
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sociedade Anônima – Lucro Real
          </motion.p>
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Localização Estratégica</h3>
            <p className="text-lg">
              <MapPin className="inline w-5 h-5 mr-2" />
              370 m² à beira-mar em Vila Velha/ES
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="bg-[#16B4C6] hover:bg-white hover:text-[#0B3C5D] text-white px-8 py-4 text-lg">
              Conheça Nossos Serviços
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Mercado & Oportunidades */}
      <section id="mercado" className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Mercado & Oportunidades</h2>
            <p className="text-xl text-gray-600">Análise do cenário atual e potencial de crescimento</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Escalada de Custos */}
            <motion.div {...fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#0B3C5D]">
                    <TrendingUp className="w-6 h-6 mr-2" />
                    Escalada de Custos de Atracação
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">2024</span>
                      <span className="text-2xl font-bold text-green-600">R$ 20.000/mês</span>
                    </div>
                    <Progress value={40} className="h-3" />
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">2025</span>
                      <span className="text-2xl font-bold text-red-600">R$ 50.000+/mês</span>
                    </div>
                    <Progress value={100} className="h-3" />
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-red-800 font-semibold">Aumento de 150% nos custos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Demanda Reprimida */}
            <motion.div {...fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#0B3C5D]">
                    <Ship className="w-6 h-6 mr-2" />
                    Demanda Reprimida
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#16B4C6] mb-2">13</div>
                      <p className="text-gray-600">Rebocadores ativos na Grande Vitória</p>
                      <p className="text-xs text-gray-500 mt-1">Fonte: Marine Traffic</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#0B3C5D] mb-2">2 de 3</div>
                      <p className="text-gray-600">Estaleiros operantes na região</p>
                      <p className="text-xs text-gray-500 mt-1">1 estaleiro encontra-se inoperante</p>
                    </div>
                    <div className="bg-[#16B4C6]/10 p-4 rounded-lg">
                      <p className="text-[#0B3C5D] font-semibold text-center">
                        Mercado com infraestrutura limitada e alta demanda reprimida
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Oferta de Serviços */}
      <section id="servicos" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Oferta de Serviços</h2>
            <p className="text-xl text-gray-600">Soluções completas para o setor naval</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Settings,
                title: "Manutenção",
                description: "Serviços especializados de manutenção preventiva e corretiva para embarcações",
              },
              {
                icon: Anchor,
                title: "Atracação",
                description: "Infraestrutura completa para atracação segura de rebocadores e embarcações",
              },
              {
                icon: Ship,
                title: "Construção Metálica",
                description: "Fabricação e reparo de estruturas metálicas navais com alta qualidade",
              },
              {
                icon: Users,
                title: "Engenharia",
                description: "Consultoria e projetos de engenharia naval especializados",
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-[#16B4C6]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#16B4C6] transition-colors duration-300">
                      <service.icon className="w-8 h-8 text-[#16B4C6] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-[#0B3C5D]">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benchmark & Pricing */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Benchmark & Pricing</h2>
            <p className="text-xl text-gray-600">Comparativo competitivo de preços</p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-[#0B3C5D]">
                  Comparativo de Preços - Estaleiros Regionais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">Estaleiro</TableHead>
                      <TableHead className="font-bold text-center">Docagem (one-off)</TableHead>
                      <TableHead className="font-bold text-center">Diária em Carreira</TableHead>
                      <TableHead className="font-bold text-center">Juros e Multa*</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Argemiro</TableCell>
                      <TableCell className="text-center text-green-600 font-bold">R$ 6.000</TableCell>
                      <TableCell className="text-center text-green-600 font-bold">R$ 600</TableCell>
                      <TableCell className="text-center text-gray-500">A definir</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Prainha</TableCell>
                      <TableCell className="text-center text-red-600 font-bold">R$ 12.000</TableCell>
                      <TableCell className="text-center text-red-600 font-bold">R$ 1.200</TableCell>
                      <TableCell className="text-center text-gray-500">A definir</TableCell>
                    </TableRow>
                    <TableRow className="bg-[#16B4C6]/10">
                      <TableCell className="font-bold text-[#0B3C5D]">TONTON (Alvo)</TableCell>
                      <TableCell className="text-center font-bold text-[#16B4C6]">Paridade de entrada</TableCell>
                      <TableCell className="text-center font-bold text-[#16B4C6]">≤ R$ 600</TableCell>
                      <TableCell className="text-center text-gray-500 font-medium">A definir</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="text-sm text-gray-500 mt-4">
                  * Política de juros e multa será detalhada em etapa posterior
                </p>
                <div className="mt-6 p-4 bg-[#16B4C6]/10 rounded-lg">
                  <p className="text-[#0B3C5D] font-semibold text-center">
                    Estratégia de Penetração: Preços competitivos para captura de mercado
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Benchmark & FMM */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Benchmark & FMM</h2>
            <p className="text-xl text-gray-600">Acesso ao Fundo da Marinha Mercante</p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-[#0B3C5D]">
                  <Anchor className="w-6 h-6 mr-2" />
                  Fundo da Marinha Mercante (FMM)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[#0B3C5D] mb-4">Benefícios do FMM</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Financiamento CAPEX futuro</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Custo de capital reduzido</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Linhas de crédito especializadas</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Apoio governamental ao setor</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B3C5D] mb-4">Cronograma de Acesso</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-400">
                        <div className="font-semibold">M6-M12</div>
                        <p className="text-sm">Protocolos FMM & Antaq</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                        <div className="font-semibold">Y+1</div>
                        <p className="text-sm">Habilitação completa</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
                        <div className="font-semibold">Y+2</div>
                        <p className="text-sm">Acesso a financiamentos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Estratégia de Mercado */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Estratégia de Mercado</h2>
            <p className="text-xl text-gray-600">Posicionamento competitivo e parcerias estratégicas</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-[#0B3C5D]">
                    <Users className="w-6 h-6 mr-2" />
                    Estratégia de Ingresso
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span>Parcerias com empresas locais e sistema de comissionamento</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span>Remuneração variável para colaboradores em vendas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span>Aproveitamento da rede de contatos UMI SAN/Hydrosolos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <span>Precificação competitiva para penetração de mercado</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-[#0B3C5D]">
                    <TrendingUp className="w-6 h-6 mr-2" />
                    Posicionamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-[#16B4C6]/10 rounded-lg">
                      <h4 className="font-semibold text-[#0B3C5D] mb-2">Proposta de Valor</h4>
                      <p className="text-gray-600 text-sm">
                        Atendimento de qualidade com organização e pronto atendimento, mantendo equilíbrio entre preço e
                        qualidade dos serviços.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Diferencial Competitivo</h4>
                      <p className="text-green-700 text-sm">
                        Ambiente limpo, bem pintado e receptivo, evitando necessidade de altos investimentos iniciais.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plano Financeiro */}
      <section id="financeiro" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Plano Financeiro</h2>
            <p className="text-xl text-gray-600">Investimentos e projeções de retorno</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Investimento Principal */}
            <motion.div {...fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-[#0B3C5D]">
                    <DollarSign className="w-6 h-6 mr-2" />
                    Investimento-Chave: Aquisição do Imóvel
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#16B4C6] mb-2">R$ 3.698.000,00</div>
                    <p className="text-gray-600">Valor total do imóvel</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                      <span>Entrada (Jul/25)</span>
                      <span className="font-bold text-green-600">R$ 750.000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                      <span>2ª parcela (Ago/25)</span>
                      <span className="font-bold text-blue-600">R$ 250.000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                      <span>3ª parcela (Set/25)</span>
                      <span className="font-bold text-blue-600">R$ 250.000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                      <span>36x parcelas (Mai/25–Abr/28)</span>
                      <span className="font-bold text-orange-600">R$ 68.000/mês</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-[#0B3C5D]/10 rounded">
                    <p className="text-[#0B3C5D] font-semibold">CAPEX inicial adequação: R$ 30.000,00</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Financial Snapshot */}
            <motion.div {...fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-[#0B3C5D]">
                    <BarChart3 className="w-6 h-6 mr-2" />
                    Financial Snapshot
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-red-50 rounded">
                        <div className="text-2xl font-bold text-red-600">R$ 405k confirmados</div>
                        <p className="text-sm text-gray-600">Desembolso 2024 (terceiros)</p>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded">
                        <div className="text-2xl font-bold text-orange-600">R$ 100k/mês</div>
                        <p className="text-sm text-gray-600">Manutenção interna atual</p>
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-[#0B3C5D] mb-3">Receita Alvo (Fase 1)</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Manutenção internalizada</span>
                          <span className="font-bold text-green-600">R$ 100k/mês</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Atracação rebocadores*</span>
                          <span className="font-bold text-green-600">R$ 50k/mês</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between font-bold">
                          <span>Total mensal</span>
                          <span className="text-[#16B4C6]">R$ 150k/mês</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">* Validar com clientes</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-800 font-semibold text-center">Payback &lt; 12 meses</p>
                    </div>
                    <div className="mt-2 text-center">
                      <p className="text-xs text-gray-500">SS Naval aumentou 400% (2021-24)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Estrutura dos Desembolsos */}
          <motion.div {...fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-[#0B3C5D]">
                  <PieChart className="w-6 h-6 mr-2" />
                  Estrutura dos Desembolsos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3">
                      <span className="text-2xl font-bold text-blue-600">97%</span>
                    </div>
                    <p className="font-semibold">Imóvel</p>
                    <p className="text-sm text-gray-600">R$ 3.698.000</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
                      <span className="text-2xl font-bold text-green-600">3%</span>
                    </div>
                    <p className="font-semibold">CAPEX</p>
                    <p className="text-sm text-gray-600">R$ 30.000</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto bg-[#16B4C6]/20 rounded-full flex items-center justify-center mb-3">
                      <span className="text-lg font-bold text-[#16B4C6]">Total</span>
                    </div>
                    <p className="font-semibold">Investimento</p>
                    <p className="text-sm text-gray-600">R$ 3.728.000</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-[#0B3C5D] mb-4">OPEX: Antes vs Depois</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-red-50 rounded">
                      <h5 className="font-semibold text-red-800 mb-2">Cenário Atual</h5>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Terceiros (atracação + serviços)</span>
                          <span className="font-bold">R$ 405k/ano</span>
                        </div>
                        <div className="flex justify-between">
                          <span>MO interna</span>
                          <span className="font-bold">R$ 100k/mês</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-green-50 rounded">
                      <h5 className="font-semibold text-green-800 mb-2">Pós-TONTON</h5>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Receita internalizada</span>
                          <span className="font-bold">R$ 150k/mês</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Economia anual</span>
                          <span className="font-bold">R$ 1.8M+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ESG & Compliance */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">ESG & Compliance</h2>
            <p className="text-xl text-gray-600">Cronograma de licenças e conformidade</p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-[#0B3C5D]">
                  <Calendar className="w-6 h-6 mr-2" />
                  Cronograma Jurídico-Regulatório
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      phase: "M0-M3",
                      status: "in-progress",
                      title: "Fase Inicial",
                      description: "CNPJ, licença municipal, oficinas básicas",
                    },
                    {
                      phase: "M4",
                      status: "pending",
                      title: "Início Operacional",
                      description: "Início manutenção externa (sem carreira)",
                    },
                    {
                      phase: "M6-M12",
                      status: "pending",
                      title: "Licenciamento Completo",
                      description: "Licenças ambientais + protocolos FMM & Antaq",
                    },
                    {
                      phase: "Y+1",
                      status: "pending",
                      title: "Expansão Infraestrutura",
                      description: "Construção da carreira e/ou dique flutuante (libera docagem)",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                            item.status === "completed"
                              ? "bg-green-500 text-white"
                              : item.status === "in-progress"
                                ? "bg-yellow-500 text-white"
                                : "bg-gray-300 text-gray-600"
                          }`}
                        >
                          {item.phase}
                        </div>
                        {index < 3 && <div className="w-0.5 h-8 bg-gray-300 mt-2" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#0B3C5D]">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <Badge
                        variant={
                          item.status === "completed"
                            ? "default"
                            : item.status === "in-progress"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {item.status === "completed"
                          ? "Concluído"
                          : item.status === "in-progress"
                            ? "Em andamento"
                            : "Planejado"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Governança & Grupo */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Governança & Grupo</h2>
            <p className="text-xl text-gray-600">Estrutura corporativa e liderança</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div {...fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0B3C5D]">UMI SAN</CardTitle>
                  <CardDescription>Sociedade Anônima</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Estrutura corporativa sólida com governança transparente e foco em resultados sustentáveis.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#0B3C5D]">Hydrosolos</CardTitle>
                  <CardDescription>Empresa do Grupo</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Expertise em soluções ambientais e engenharia, complementando o portfólio naval.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div className="text-center" {...fadeInUp}>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#16B4C6] text-[#16B4C6] hover:bg-[#16B4C6] hover:text-white"
                >
                  Relatório de Sustentabilidade
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Relatório de Sustentabilidade</DialogTitle>
                  <DialogDescription>
                    Nosso compromisso com práticas ESG e desenvolvimento sustentável
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">100%</div>
                      <p className="text-sm">Conformidade Ambiental</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">50+</div>
                      <p className="text-sm">Empregos Diretos</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">15%</div>
                      <p className="text-sm">Redução Emissões</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    O TONTON Shipyard está comprometido com práticas sustentáveis, gerando valor econômico enquanto
                    preserva o meio ambiente marinho e contribui para o desenvolvimento da comunidade local.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </section>

      {/* PT-BR: Bloco Jurídico & Fiscal */}
      <section id="legal-tax" className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Estrutura Jurídica & Fiscal</h2>
            <p className="text-xl text-gray-600">Governança, tributação e compliance corporativo</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CARD 1 – Forma Societária */}
            <motion.article className="p-6 bg-white shadow-lg rounded-xl" {...fadeInUp}>
              <div className="flex items-center mb-4">
                <Scale className="w-6 h-6 text-[#16B4C6] mr-2" />
                <h3 className="text-lg font-semibold text-[#0B3C5D]">Forma Societária</h3>
              </div>
              <p className="text-[#0B3C5D] font-bold text-xl mb-2">S.A. — Lucro Real</p>
              <p className="text-gray-600 text-sm">
                Sociedade Anônima com regime tributário <strong>Lucro Real</strong>
                desde o primeiro exercício, possibilitando aproveitamento integral de créditos fiscais e transparência
                para investidores institucionais.
              </p>
            </motion.article>

            {/* CARD 2 – Objeto Social / CNAE */}
            <motion.article className="p-6 bg-white shadow-lg rounded-xl" {...fadeInUp}>
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-[#16B4C6] mr-2" />
                <h3 className="text-lg font-semibold text-[#0B3C5D]">Objeto Social / CNAE</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="font-semibold text-[#0B3C5D] mr-2">3317-1/01</span>
                  <span>— Manutenção e reparo de embarcações</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-[#0B3C5D] mr-2">3011-3/01</span>
                  <span>— Construção de embarcações de grande porte</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-[#0B3C5D] mr-2">3011-3/02</span>
                  <span>— Construção de embarcações comerciais e especiais</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-[#0B3C5D] mr-2">3831-9/99</span>
                  <span>— Recuperação de materiais metálicos</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-[#0B3C5D] mr-2">71.12-0/00</span>
                  <span>— Serviços de engenharia</span>
                </li>
              </ul>
            </motion.article>

            {/* CARD 3 – Obrigações Fiscais e Contábeis */}
            <motion.article className="p-6 bg-white shadow-lg rounded-xl md:col-span-2" {...fadeInUp}>
              <div className="flex items-center mb-4">
                <Calculator className="w-6 h-6 text-[#16B4C6] mr-2" />
                <h3 className="text-lg font-semibold text-[#0B3C5D]">Obrigações Fiscais & Contábeis</h3>
              </div>
              <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
                <li>Entrega de ECD, ECF e SPED Fiscal a partir do ano 1.</li>
                <li>Controle de créditos de PIS/COFINS sobre CAPEX.</li>
                <li>
                  Provisão contábil para <em>juros e multa</em> em linha própria (placeholder já configurado no Plano
                  Financeiro).
                </li>
                <li>
                  Política de <strong>Transfer Pricing</strong> aplicada a serviços intra-grupo (UMI SAN & Hydrosolos).
                </li>
              </ul>
            </motion.article>

            {/* CARD 4 – Compliance & Licenças */}
            <motion.article className="p-6 bg-white shadow-lg rounded-xl md:col-span-2" {...fadeInUp}>
              <div className="flex items-center mb-4">
                <Certificate className="w-6 h-6 text-[#16B4C6] mr-2" />
                <h3 className="text-lg font-semibold text-[#0B3C5D]">Compliance & Licenciamento</h3>
              </div>
              <ol className="list-decimal pl-5 text-gray-700 text-sm space-y-2">
                <li>CNPJ + Inscrição Estadual (M0-M1).</li>
                <li>Alvará municipal & Vigilância Sanitária (M1-M2).</li>
                <li>Licenças ambientais (LO & LI) — prazo estimado 6-12 meses.</li>
                <li>Registro no RIP & ANTT/ANTAQ para operação portuária.</li>
                <li>
                  Habilitação no{" "}
                  <span
                    className="font-bold text-[#16B4C6] cursor-help border-b border-dotted border-[#16B4C6]"
                    title="Fundo da Marinha Mercante - Linha de crédito especializada para o setor naval"
                  >
                    FMM
                  </span>{" "}
                  para linha de crédito de expansão.
                </li>
              </ol>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Matriz de Risco */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-[#0B3C5D] mb-4">Matriz de Risco</h2>
            <p className="text-xl text-gray-600">Análise de riscos e estratégias de mitigação</p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle className="text-[#0B3C5D]">Principais Riscos Identificados</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">Risco</TableHead>
                      <TableHead className="font-bold text-center">Prob.</TableHead>
                      <TableHead className="font-bold text-center">Impacto</TableHead>
                      <TableHead className="font-bold">Mitigação</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Escritura/RIP faltante</TableCell>
                      <TableCell className="text-center">
                        <Badge variant="destructive">Alta</Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="destructive">Alta</Badge>
                      </TableCell>
                      <TableCell>Due-diligence + cláusula rescisória</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Licenças ambientais</TableCell>
                      <TableCell className="text-center">
                        <Badge variant="destructive">Alta</Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="secondary">Média</Badge>
                      </TableCell>
                      <TableCell>Operar manutenção externa + apoio consultoria</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Capacidade 370 m²</TableCell>
                      <TableCell className="text-center">
                        <Badge variant="secondary">Média</Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="secondary">Média</Badge>
                      </TableCell>
                      <TableCell>Estudo dique flutuante modular</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Concorrentes SS Naval/Zemax</TableCell>
                      <TableCell className="text-center">
                        <Badge variant="secondary">Média</Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="secondary">Média</Badge>
                      </TableCell>
                      <TableCell>Preço de penetração ≤ R$ 600 & serviço premium</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B3C5D] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/tonton-logo.png"
                alt="TONTON Shipyard"
                width={120}
                height={40}
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-300">Excelência em serviços navais com infraestrutura de primeira classe.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Manutenção Naval</li>
                <li>Atracação</li>
                <li>Construção Metálica</li>
                <li>Engenharia</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Sobre Nós</li>
                <li>Governança</li>
                <li>Sustentabilidade</li>
                <li>Carreiras</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Termos de Uso</li>
                <li>Política de Privacidade</li>
                <li>Política de Juros e Multa*</li>
              </ul>
              <p className="text-xs text-gray-400 mt-2">* A ser detalhado em etapa posterior</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 TONTON Shipyard. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
