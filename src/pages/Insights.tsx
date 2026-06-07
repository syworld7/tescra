import React, { useState } from "react";
import { Search, Calendar, Clock, ArrowRight, X, BookOpen, Filter } from "lucide-react";
import { categories, articles } from "../constants/insights";
import type { ArticleItem } from "../types/insights";

export default function Insights() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  const filteredArticles = articles.filter((art) => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || art.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-24 border-t border-slate-200 dark:border-darkborder/30 bg-slate-50 dark:bg-darkbg relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white mb-4 tracking-tight">
              Latest Insights & News
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-base leading-relaxed">
              Stay updated with tech analyses, strategy guides, and engineering breakthroughs from the Tescra team.
            </p>
          </div>
 
          
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-darkcard/50 rounded-xl border border-slate-200 dark:border-darkborder focus:outline-none focus:border-neonindigo text-sm text-slate-800 dark:text-white transition-all placeholder:text-slate-400 dark:placeholder:text-gray-500"
            />
          </div>
        </div>
 
        
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mr-2 flex items-center space-x-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-neonindigo to-neonviolet text-white shadow-lg shadow-indigo-500/15"
                  : "bg-slate-200/60 dark:bg-white/5 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
 
        
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((art) => (
              <article
                key={art.id}
                onClick={() => setSelectedArticle(art)}
                className="glass-panel rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between group transition-all duration-300 hover:border-slate-300 dark:hover:border-white/10 hover:shadow-md dark:hover:shadow-none"
              >
                
                <div className="h-48 relative overflow-hidden border-b border-slate-200 dark:border-darkborder/50">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent"></div>
                  
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/95 dark:bg-darkbg/95 border border-slate-200 dark:border-darkborder rounded-lg text-[10px] font-bold tracking-widest uppercase text-[#F58220]">
                    {art.category}
                  </span>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-4 text-xs text-white/90">
                    <span className="flex items-center space-x-1 drop-shadow-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{art.date}</span>
                    </span>
                    <span className="flex items-center space-x-1 drop-shadow-sm">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{art.readTime}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between bg-white dark:bg-transparent">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-neonindigo transition-colors duration-200">
                      {art.title}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed line-clamp-3 mb-6">
                      {art.shortDesc}
                    </p>
                  </div>

                  <div className="flex items-center space-x-1 text-xs font-bold text-neonindigo group-hover:text-neonviolet transition-colors duration-200">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-darkcard/50 border border-slate-200 dark:border-darkborder rounded-2xl">
            <p className="text-slate-500 dark:text-gray-400 text-sm">No insights found matching "{searchQuery}"</p>
          </div>
        )}

      </div>

      
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 dark:bg-darkbg/80 backdrop-blur-sm">
          <div
            className="w-full max-w-2xl bg-white dark:bg-darkbg border border-slate-200 dark:border-darkborder rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            
            <div className="p-6 md:p-8 border-b border-slate-200 dark:border-darkborder/50 flex items-center justify-between bg-slate-50 dark:bg-darkcard/30">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-6 h-6 text-neonindigo" />
                <span className="px-2.5 py-0.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-darkborder rounded-lg text-xs font-bold tracking-widest uppercase text-neonteal">
                  {selectedArticle.category}
                </span>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-darkborder bg-white dark:bg-white/5 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            
            <div className="p-6 md:p-8 max-h-[65vh] overflow-y-auto space-y-6">
              <div className="flex items-center space-x-4 text-xs text-slate-400 dark:text-gray-500">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{selectedArticle.date}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{selectedArticle.readTime}</span>
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-slate-900 dark:text-white leading-snug">
                {selectedArticle.title}
              </h3>

              <p className="text-slate-700 dark:text-gray-300 text-sm md:text-base leading-relaxed whitespace-pre-line pt-2">
                {selectedArticle.content}
              </p>
            </div>

            
            <div className="p-6 border-t border-slate-200 dark:border-darkborder/50 flex justify-end bg-slate-50 dark:bg-darkcard/20">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-white text-sm font-semibold rounded-xl border border-slate-200 dark:border-darkborder transition-all"
              >
                Close Reader
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
