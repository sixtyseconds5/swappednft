import React, { useState, useEffect } from "react";
import { X,Bell,Heart,Repeat2,MessageCircle,Check,ExternalLink,Lock,Unlock } from "lucide-react";
import { toast } from "sonner";

const tasks=[{id:1,label:"Follow us on X",desc:"Follow @SwappedNFT then confirm your X username below.",cta:"Follow on X",icon:"bell",href:"https://x.com/intent/follow?screen_name=SwappedNFT"},
{id:2,label:"Like the Pinned Post",desc:"Open the pinned post and click Like.",cta:"Open Post",icon:"heart",href:"https://x.com/SwappedNFT"},
{id:3,label:"Retweet the Pinned Post",desc:"Retweet our pinned post.",cta:"Open Post",icon:"repeat",href:"https://x.com/SwappedNFT"},
{id:4,label:"Comment Your Favorite Character",desc:"Drop a comment under the pinned post.",cta:"Open Post",icon:"message",href:"https://x.com/SwappedNFT"}];

const iconMap={bell:Bell,heart:Heart,repeat:Repeat2,message:MessageCircle};

export const ApplyModal=({open,onClose})=>{
const [state,setState]=useState({});
const [wallet,setWallet]=useState("");
const [twitter,setTwitter]=useState("");

useEffect(()=>{document.body.style.overflow=open?"hidden":"";},[open]);

if(!open) return null;

const setTaskState=(id,s)=>setState((p)=>({...p,[id]:s}));

const handleOpenAction=(task)=>{
window.open(task.href,"_blank","noopener,noreferrer");
setTaskState(task.id,"done");
toast.success("Task completed");
};

const handleWhitelistSubmit=async()=>{
if(!wallet||!twitter){
toast.error("Please fill all fields");
return;
}

try{
const response=await fetch(
"https://script.google.com/macros/s/AKfycbxiUqd-Qgw0BHyx6V3jOmvQbXK8sZLCmrDa1NSvMmk8yNcv95aahJCuMAublsPkGVQ/exec",
{
method:"POST",
body:new URLSearchParams({
wallet:wallet,
twitter:twitter,
}),
}
);

if(response.ok){
toast.success("Successfully Joined Whitelist");
setWallet("");
setTwitter("");
}else{
toast.error("Failed to submit");
}
}catch(error){
console.error(error);
toast.error("Error submitting form");
}
};

const allDone=tasks.every((t)=>state[t.id]==="done");

return(
<div className="fixed inset-0 z-[100] flex items-center justify-center p-4 fade-up" style={{background:"rgba(8, 14, 8, 0.75)",backdropFilter:"blur(6px)"}} onClick={onClose}>
<div className="relative w-full max-w-xl rounded-2xl bg-[#1F3A1F] border border-[#F2C829]/45 shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto" onClick={(e)=>e.stopPropagation()}>
<button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center border border-[#F2C829]/40 text-[#F4EBCC]">
<X size={18}/>
</button>

<h3 className="font-display brand-yellow text-2xl md:text-3xl">Complete These Tasks</h3>

<div className="mt-5 space-y-3">
{tasks.map((t)=>{
const Icon=iconMap[t.icon];
const isDone=state[t.id]==="done";

return(
<div key={t.id} className="rounded-xl bg-[#16291A] border border-[#F2C829]/20 p-3.5">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isDone?"bg-emerald-500 text-white":"bg-yellow-brand brand-forest"}`}>
{isDone?<Check size={18}/>:<Icon size={18}/>}
</div>

<div>
<div className="text-[14px] font-semibold brand-cream">{t.label}</div>
<div className="text-[12px]" style={{color:"#A39871"}}>{t.desc}</div>
</div>
</div>

{!isDone&&(
<button onClick={()=>handleOpenAction(t)} className="btn-press inline-flex items-center gap-1.5 text-[12px] font-bold px-3.5 py-2 rounded-lg bg-yellow-brand brand-forest">
{t.cta}
<ExternalLink size={13} strokeWidth={2.5}/>
</button>
)}

{isDone&&(
<span className="text-[12px] font-bold text-emerald-400 flex items-center gap-1">
<Check size={14} strokeWidth={3}/> Done
</span>
)}
</div>
</div>
);
})}
</div>

<div className={`mt-6 rounded-xl p-5 text-center ${allDone?"bg-emerald-900/40 border border-emerald-500/60":"bg-[#16291A] border border-[#F2C829]/20"}`}>
{allDone?(
<>
<div className="flex items-center justify-center gap-2 mb-2 text-emerald-300">
<Unlock size={18} strokeWidth={2.5}/>
<span className="font-semibold">All tasks completed!</span>
</div>

<div className="w-full max-w-md mx-auto flex flex-col gap-3 mt-4">
<input type="text" value={wallet} onChange={(e)=>setWallet(e.target.value)} placeholder="Wallet Address" className="w-full rounded-lg bg-[#0d1a0d] border border-[#F2C829]/30 px-4 py-3 text-[14px] brand-cream outline-none placeholder-[#5e6b50]"/>

<input type="text" value={twitter} onChange={(e)=>setTwitter(e.target.value)} placeholder="Twitter/X Username" className="w-full rounded-lg bg-[#0d1a0d] border border-[#F2C829]/30 px-4 py-3 text-[14px] brand-cream outline-none placeholder-[#5e6b50]"/>

<button onClick={handleWhitelistSubmit} className="btn-press inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-yellow-brand brand-forest font-bold">
Submit Whitelist
</button>
</div>
</>
):(
<>
<div className="flex items-center justify-center gap-2 mb-1.5 text-[#A39871]">
<Lock size={16} strokeWidth={2.5}/>
<span className="text-[13px] font-semibold">Form is locked</span>
</div>

<p className="text-[12.5px]" style={{color:"#A39871"}}>
Complete all tasks above to unlock the application form.
</p>
</>
)}
</div>
</div>
</div>
);
};
