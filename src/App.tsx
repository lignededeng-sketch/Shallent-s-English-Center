/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Users, 
  Clock, 
  Star, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight,
  BookOpen,
  GraduationCap,
  Sparkles,
  MapPin,
  Menu,
  X,
  Phone
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className, ...props }: { children: React.ReactNode, delay?: number, className?: string } & React.HTMLAttributes<HTMLDivElement>) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

const ShallentLogo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <div className={`relative ${className} shrink-0`}>
      <img 
        src="/logo.png" 
        alt="Shallent Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-shallent-cream font-sans text-shallent-text selection:bg-shallent-violet-light selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-shallent-cream/90 backdrop-blur-md border-b border-shallent-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <ShallentLogo className="w-12 h-12 md:w-14 md:h-14 group-hover:scale-105 transition-transform" />
              <div>
                <h1 className="text-xl tracking-wide font-bold text-shallent-violet-dark leading-tight">夏倫美語</h1>
                <p className="text-[10px] text-shallent-text-light font-medium tracking-wider uppercase">Shallent's English</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#difference" className="text-sm font-medium hover:text-shallent-violet transition-colors">核心差異</a>
              <a href="#programs" className="text-sm font-medium hover:text-shallent-violet transition-colors">課程規劃</a>
              <a href="#reviews" className="text-sm font-medium hover:text-shallent-violet transition-colors">家長見證</a>
              <a href="#faq" className="text-sm font-medium hover:text-shallent-violet transition-colors">常見問題</a>
              <button className="bg-shallent-violet text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-shallent-violet-dark transition-all shadow-sm hover:shadow-md active:scale-95">
                免費預約試聽
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-shallent-text"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white border-t border-shallent-gray"
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                <a href="#difference" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-shallent-text font-medium border-b border-shallent-gray/50">核心差異</a>
                <a href="#programs" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-shallent-text font-medium border-b border-shallent-gray/50">課程規劃</a>
                <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-shallent-text font-medium border-b border-shallent-gray/50">家長見證</a>
                <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-shallent-text font-medium border-b border-shallent-gray/50">常見問題</a>
                <button className="w-full mt-4 bg-shallent-violet text-white px-6 py-3 rounded-xl text-base font-medium">
                  免費預約試聽
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-20 right-[-10%] w-96 h-96 bg-shallent-pink-light/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 left-[-10%] w-72 h-72 bg-shallent-yellow-light/60 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-shallent-blue-light/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <FadeIn>
              <span className="inline-block py-1 px-3 rounded-full bg-shallent-violet-light/10 text-shallent-violet-dark text-xs font-semibold tracking-wider mb-6">
                TAICHUNG PREMIUM ENGLISH
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-shallent-heading">
                不只是補習，<br />
                讓孩子把英語<span className="text-shallent-violet relative inline-block">「說」成母語<svg className="absolute w-full h-3 -bottom-1 left-0 text-shallent-yellow opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg></span>。
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-shallent-text-light mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                拒絕大班制的沉默填鴨。夏倫美語堅持<strong className="text-shallent-violet-dark font-semibold">精品小班制</strong>，給予孩子比傳統補習班多出 <strong className="bg-shallent-yellow-light px-1 font-semibold text-shallent-heading">600% 的發言時間</strong>，真正培養帶得走的會話自信。
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                <button className="w-full sm:w-auto bg-shallent-violet text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-shallent-violet-dark transition-all shadow-lg shadow-shallent-violet/20 flex items-center justify-center gap-2 group">
                  免費預約體驗
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto bg-white border border-shallent-gray text-shallent-text px-8 py-4 rounded-xl text-lg font-medium hover:bg-shallent-gray transition-colors">
                  了解課程規劃
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10 text-sm md:text-base font-medium text-shallent-text-light">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-shallent-yellow-light flex items-center justify-center text-yellow-600">
                    <Users size={16} />
                  </div>
                  <span>小班精緻教學，讓每位孩子都被看見</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-shallent-pink-light/50 flex items-center justify-center text-pink-600">
                    <MessageCircle size={16} />
                  </div>
                  <span>25+ 分鐘真實開口</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-shallent-blue-light/30 flex items-center justify-center text-blue-600">
                    <Star size={16} />
                  </div>
                  <span>家長滿意度 98%</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Hero Image composite */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
            <FadeIn delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5] shadow-2xl shadow-shallent-violet/10">
                <img 
                  src="/taichung.jpg" 
                  alt="Taichung Cityscape" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-shallent-violet-dark/40 to-transparent"></div>
                
                {/* Floating trust badge */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg flex items-center gap-4 border border-white/20"
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <img key={i} src={`https://picsum.photos/seed/parent${i}/40/40`} alt="Parent" className="w-10 h-10 rounded-full border-2 border-white" referrerPolicy="no-referrer"/>
                    ))}
                  </div>
                  <div>
                    <div className="flex text-yellow-400 gap-0.5 mb-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-xs font-medium">超過 500+ 位台中家長的信賴選擇</p>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Value Proposition & ROI */}
      <section id="difference" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">為什麼在傳統補習班，孩子總是聽得懂卻「不敢開口」？</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-shallent-text-light leading-relaxed">
                語言學習不是單向輸入的知識，而是肌肉記憶與大腦反射的結合。
                如果一堂課 90 分鐘，孩子只開口 4 分鐘，即使學了十年，依然不敢說。
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Traditional Method */}
            <FadeIn delay={0.2}>
              <div className="bg-shallent-blue-light/50 rounded-3xl p-8 border border-shallent-blue-border opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-shallent-gray flex items-center justify-center text-shallent-text-light">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-shallent-blue">傳統大班制</h3>
                    <p className="text-sm text-shallent-text-light">20-30 人一班</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <X className="text-shallent-pink shrink-0 mt-0.5" size={20} />
                    <p className="text-shallent-text">老師在台上講，學生在台下聽</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="text-shallent-pink shrink-0 mt-0.5" size={20} />
                    <p className="text-shallent-text">以抄寫、背單字、考試為核心</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="text-shallent-pink shrink-0 mt-0.5" size={20} />
                    <p className="text-shallent-text">遇到外國人還是腦袋空白</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-shallent-blue-border">
                  <p className="text-sm text-shallent-text-light font-medium mb-2">每位學生單堂平均開口時間</p>
                  <p className="text-3xl font-bold text-shallent-muted">~ 4 分鐘</p>
                </div>
              </div>
            </FadeIn>

            {/* Shallent Method */}
            <FadeIn delay={0.3}>
              <div className="bg-shallent-violet-dark rounded-3xl p-8 border border-shallent-violet shadow-2xl relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-shallent-violet-light rounded-full mix-blend-overlay filter blur-3xl opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-shallent-yellow flex items-center justify-center text-shallent-violet-dark">
                      <Star size={24} className="fill-current" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">夏倫小班制 <span className="text-shallent-yellow ml-2 text-sm">Our Focus</span></h3>
                      <p className="text-sm text-shallent-violet-light">精緻 4-6 人一班</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-shallent-yellow shrink-0 mt-0.5" size={20} />
                      <p className="text-indigo-50">在遊戲與活動中學習，讓孩子快樂開口說英文</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-shallent-yellow shrink-0 mt-0.5" size={20} />
                      <p className="text-indigo-50">引導式提問，強迫大腦用英語思考</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-shallent-yellow shrink-0 mt-0.5" size={20} />
                      <p className="text-indigo-50">不怕犯錯的環境，建立極大開口自信</p>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-sm">
                    <p className="text-sm text-indigo-100 font-medium mb-2">每位學生單堂平均開口時間</p>
                    <div className="flex items-end gap-3">
                      <p className="text-4xl md:text-5xl font-bold text-shallent-yellow">25+ 分鐘</p>
                      <p className="text-white text-sm font-medium pb-2 bg-shallent-violet px-2 py-0.5 rounded">600% 效率</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-shallent-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <FadeIn>
                <div className="text-shallent-violet-dark font-semibold tracking-wider text-sm mb-4">OUR CURRICULUM</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">針對不同階段，給予最精準的引導</h2>
                <p className="text-shallent-text-light text-lg">從語感啟蒙到實戰應用，我們規劃了完整且不可妥協的升級路徑。</p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <button className="hidden md:flex items-center gap-2 text-shallent-violet hover:text-shallent-violet-dark font-medium transition-colors group">
                下載完整課程白皮書
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: '幼兒啟蒙',
                age: '3-6 歲',
                color: 'bg-shallent-pink-light/40 border-shallent-pink',
                icon: <MessageCircle className="text-pink-600" size={24} />,
                goal: '培養語感與無懼開口的興趣',
                desc: '透過原汁原味的繪本、歌謠與肢體遊戲，讓孩子將英語視為好玩的溝通工具，自然吸收發音規則。'
              },
              {
                title: '國小札根',
                age: '7-12 歲',
                color: 'bg-shallent-yellow-light/40 border-shallent-yellow',
                icon: <BookOpen className="text-yellow-600" size={24} />,
                goal: '自然發音與句型結構建立',
                desc: '擺脫死背單字，掌握 Phonics 直覺拼讀。透過生活情境劇本，讓孩子能在各種場景中完整表達想法。'
              },
              {
                title: '國中進階',
                age: '13-15 歲',
                color: 'bg-shallent-blue-light/20 border-shallent-blue-light',
                icon: <GraduationCap className="text-blue-600" size={24} />,
                goal: '深入邏輯表達與文法思維',
                desc: '從單向表達進階到雙向討論。透過引導式議題探討，訓練邏輯思維，同時穩固學校文法基礎。'
              },
              {
                title: '高中與成人',
                age: '16 歲以上',
                color: 'bg-shallent-violet-light/10 border-shallent-violet-light',
                icon: <Sparkles className="text-shallent-violet" size={24} />,
                goal: '實戰會話、檢定與商務應用',
                desc: '針對雅思、托福或職場商務口說需求。高強度的全英文辯論與報告，打造無縫接軌國際的實力。'
              }
            ].map((program, idx) => (
              <FadeIn key={idx} delay={0.1 * idx}>
                <div className={`h-full rounded-3xl p-8 border ${program.color} bg-white flex flex-col group hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl hover:shadow-shallent-violet/5`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-shallent-gray-light flex items-center justify-center shrink-0">
                      {program.icon}
                    </div>
                    <span className="text-sm font-semibold text-shallent-text-light py-1 px-3 bg-shallent-gray-light rounded-full">
                      {program.age}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-sm font-medium text-shallent-violet-dark mb-4">{program.goal}</p>
                  <p className="text-shallent-text-light text-sm leading-relaxed mb-6 flex-grow">
                    {program.desc}
                  </p>
                  <button className="mt-auto flex items-center gap-2 text-sm font-semibold text-shallent-text group-hover:text-shallent-violet transition-colors">
                    了解更多 <ArrowRight size={16} />
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof & Testimonials */}
      <section id="reviews" className="py-24 bg-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-shallent-blue-light/5 -skew-x-12 transform origin-top-right"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">在夏倫，改變的不只是成績，是自信。</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-shallent-text-light">聽聽台中的家長們，如何見證孩子語言能力的蛻變。</p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "幫孩子換了幾間英文教室的我，一度以為孩子很討厭英文，甚至排斥英文，但是在夏倫美短短幾個月，我的孩子找到了對英文的自信，現在不僅不排斥英文，甚至會回來開心跟我分享！媽媽真的很開心很幸運，可以遇到這麼認真的老師和整個團隊！夏倫美的老師真的有股魔力，讓人喜歡英文，覺得英文一點都不難的魔力 💗💗💗",
                author: "林Lynn",
                childInfo: "家長推薦",
                img: "https://picsum.photos/seed/mom1/60/60"
              },
              {
                text: "我們是五年級才加入學習，短時間成績就有顯著進步，寫聽學校老師而且孩子每次上課都是開心的，超愛Shallent老師。感謝各位上課的老師們",
                author: "Haru Yang",
                childInfo: "家長推薦",
                img: "https://picsum.photos/seed/dad1/60/60"
              },
              {
                text: "非常推薦Shallent老師，除了教學專業度豐厚，上課技巧融合老師個人特色，活潑幽默又有趣的上課氛圍，非常適合外語學習；尤其老師積極的發音及口說令人印象深刻，這樣自然沉浸的英語環境，直接助益孩子們提升英語口語表達能力。",
                author: "Chang Jane",
                childInfo: "家長推薦",
                img: "https://picsum.photos/seed/woman1/60/60"
              }
            ].map((review, idx) => (
              <FadeIn key={idx} delay={0.2 * idx}>
                <div className="bg-shallent-cream rounded-2xl p-8 h-full flex flex-col relative">
                  <div className="text-shallent-yellow mb-4">
                    <svg className="w-10 h-10 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-9.983z" /></svg>
                  </div>
                  <p className="text-shallent-text leading-relaxed mb-8 flex-grow relative z-10 font-medium">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img src={review.img} alt={review.author} className="w-12 h-12 rounded-full object-cover shadow-sm" referrerPolicy="no-referrer" />
                    <div>
                      <p className="font-bold text-sm text-shallent-heading">{review.author}</p>
                      <p className="text-xs text-shallent-text-light">{review.childInfo}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Class Experience & Environment */}
      <section className="py-24 bg-shallent-gray relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <FadeIn>
                <div className="text-shallent-violet-dark font-semibold tracking-wider text-sm mb-4">THE ENVIRONMENT</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">沉穩、專注、充滿安全感的學習空間</h2>
                <p className="text-lg text-shallent-text-light mb-8 leading-relaxed">
                  環境會說話。夏倫美語打造色彩柔和且富有互動感的學習空間，兼具趣味與專注。整體設計清爽整潔，沒有多餘干擾，同時完整支援孩子的學習需求。自然光線充足，幫助孩子在進門的瞬間放鬆心情，進入專注且穩定的學習狀態。
                </p>
              </FadeIn>
              
              <div className="space-y-6">
                {[
                  { title: "低干擾高品質教室", desc: "老師與互動是學習的核心，減少不必要的視覺干擾。" },
                  { title: "自然光學習環境", desc: "柔和且充足的自然光，提升專注力並帶來穩定與放鬆的學習氛圍。" },
                  { title: "自在的環狀座位", desc: "打破前後排距離，讓學生與老師自然互動，如同輕鬆對話的學習場域。" }
                ].map((item, idx) => (
                  <FadeIn key={idx} delay={0.2 + (0.1 * idx)}>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-shallent-violet-light/20 flex items-center justify-center text-shallent-violet shrink-0 mt-1">
                        <CheckCircle2 size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-shallent-heading text-lg mb-1">{item.title}</h4>
                        <p className="text-shallent-text-light text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full grid grid-cols-2 gap-4">
              <FadeIn delay={0.2} className="col-span-2">
                <img src="/1.jpg.jpg" alt="Clean minimal classroom" className="rounded-2xl w-full h-64 object-cover shadow-md" referrerPolicy="no-referrer" />
              </FadeIn>
              <FadeIn delay={0.4}>
                <img src="/2.jpg.jpg" alt="Student smiling" className="rounded-2xl w-full h-48 object-cover shadow-md" referrerPolicy="no-referrer" />
              </FadeIn>
              <FadeIn delay={0.6}>
                <img src="/3.jpg.jpg" alt="Teacher interacting" className="rounded-2xl w-full h-48 object-cover shadow-md" referrerPolicy="no-referrer" />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">家長常見問題</h2>
          </FadeIn>
          
          <div className="space-y-4">
            {[
              {
                q: "夏倫的學費會不會很貴？",
                a: "若單看『每個月的絕對金額』，精緻小班確實比 30 人的傳統大班稍高。但若以『孩子實際開口的時間與最終獲得的成效』來計算投資報酬率（ROI），夏倫的效率是傳統的 6 倍以上。您買到的不是『坐在那裡的時間』，而是『真正學會說英文的能力』。"
              },
              {
                q: "如果小孩程度不好，小班制會不會壓力很大？",
                a: "完全相反。在傳統大班，程度弱的孩子通常會躲在角落不說話，最終被放棄。在夏倫的 6 人小班，老師有餘裕照顧到每個人的情緒，透過溫和引導與『答錯也沒關係』的環境設定，反而能最快幫助孩子卸下心防、建立自信。"
              },
              {
                q: "有提供外師教學嗎？",
                a: "我們擁有具備國際教學證照的優質雙語中師與母語外師團隊。針對初學或低齡階段，我們會搭配雙語中師，確保孩子在有安全感的狀態下建立基礎；進階階段則會銜接外師，強化道地母語邏輯與文化習慣。"
              },
              {
                q: "請問有幾歲可以試聽？",
                a: "我們針對 3 歲以上的幼兒、國小、國高中至成人皆有對應的常態班級。建議您可以先預約能力檢測與免費試聽，我們會安排最適合的入班時段。"
              }
            ].map((faq, idx) => (
              <FadeIn key={idx} delay={0.1 * idx}>
                <details className="group bg-shallent-cream rounded-2xl p-6 cursor-pointer open:ring-2 open:ring-shallent-violet/20 open:shadow-md transition-all">
                  <summary className="flex items-center justify-between font-bold text-lg text-shallent-heading list-none">
                    {faq.q}
                    <ChevronDown className="group-open:rotate-180 transition-transform text-shallent-violet" size={20} />
                  </summary>
                  <p className="mt-4 text-shallent-text-light leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <section className="py-24 bg-shallent-violet-dark relative overflow-hidden text-white">
        {/* Background abstract overlay */}
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/texture/1920/1080?blur=10')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-shallent-violet-light rounded-full filter blur-[100px] opacity-40"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">英文，不該是一輩子的痛。</h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              給孩子一個真正學好語言的環境。一天一點點的累積，從勇敢開口那一刻起，世界就此向他敞開。<br/>
              <span className="font-bold text-shallent-yellow mt-4 block">名額有限，立即預約專屬免費試聽體驗。</span>
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto bg-shallent-yellow text-shallent-heading px-10 py-5 rounded-2xl text-xl font-bold hover:bg-shallent-yellow-light hover:scale-105 transition-all shadow-xl shadow-shallent-yellow/20">
                立即預約免費試聽
              </button>
              <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl text-xl font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                <MessageCircle size={24} />
                加入 LINE 諮詢
              </button>
            </div>
            <p className="mt-6 text-sm text-indigo-300 font-medium">✨ 填寫表單後，顧問將於 12 小時內與您聯繫</p>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-shallent-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
            <ShallentLogo className="w-10 h-10" />
            <div>
              <h2 className="text-lg font-bold text-shallent-heading leading-tight">夏倫美語</h2>
              <p className="text-[9px] text-shallent-text-light font-medium tracking-wider uppercase">Shallent's English Center</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-shallent-text-light items-center">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>407 台中市西屯區福雅路 141 號 2 樓</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>0424623521</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 pt-8 border-t border-shallent-gray text-center text-xs text-shallent-muted">
          © {new Date().getFullYear()} Shallent's English Center. All rights reserved. Designed for Premium Learning.
        </div>
      </footer>
    </div>
  );
}
