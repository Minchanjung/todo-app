(()=>{(()=>{const e=document.querySelector("#addProjectPopup"),t=document.querySelector("#newProject"),c=document.querySelector("#projectCancel"),n=document.querySelector("#projectSubmit"),l=document.querySelector("#projectInput"),a=document.querySelector("#projectsContainer");t.onclick=function(){t.style.display="none",e.style.display="block"},c.onclick=function(){t.style.display="block",e.style.display="none",l.value=""},n.onclick=function(){const c=document.createElement("div");c.setAttribute("id",l.value),c.setAttribute("class","projectTabs"),c.setAttribute("onclick","loadProjectContent.projectTab(event, input.value)"),c.textContent=l.value,a.appendChild(c),console.log(c),o.saveFolder(l.value),t.style.display="block",e.style.display="none",l.value=""}})(),(()=>{const t=document.querySelector("#newTask"),o=document.querySelector("#addTaskPopup"),c=document.querySelector("#taskCancel"),n=document.querySelector("#taskSubmit"),l=document.querySelector("#taskInput"),a=document.querySelector("#taskDescription"),r=document.querySelector("#date"),u=document.querySelector("#time");t.onclick=function(){o.style.display="block"},c.onclick=function(){o.style.display="none",l.value="",r.value="",a.value="",u.value=""},n.onclick=function(){const t=document.querySelector("#allTasks"),c=document.createElement("div");c.setAttribute("id","jsDiv"),t.appendChild(c);const n=document.createElement("input");n.setAttribute("type","checkbox"),n.setAttribute("id","checkBox"),c.appendChild(n);const s=document.createElement("div");s.textContent=l.value,s.setAttribute("id","popUpTitle"),c.appendChild(s);const d=document.createElement("div");d.textContent=r.value,d.setAttribute("id","popUpDate"),c.appendChild(d);const i=document.createElement("div");i.textContent="X",i.setAttribute("id","xBtn"),c.appendChild(i),i.onclick=function(){},o.style.display="none",l.value="",r.value="",a.value="",u.value="",e()}})();const e=()=>{document.querySelector("#jsDiv"),console.log(jsDiv);const e=document.querySelectorAll("#xBtn"),t=document.querySelectorAll("#checkBox");e.forEach((e=>{e.onclick=function(){e.parentElement.remove()}})),t.forEach((e=>{console.log(e),e.addEventListener("change",(()=>{e.checked?(console.log("checked"),e.parentElement.style.backgroundColor="rgba(245, 245, 245, 0.6)"):e.parentElement.style.backgroundColor="rgba(245, 245, 245, 100)"}))}))},t=e=>{let t,o;for(console.log("clicked"),o=document.getElementsByClassName("projectTabs"),t=0;t<o.length;t++)o[t].className=o[t].className.replace(" active","")},o={saveFolder:e=>{localStorage.setItem("projects",JSON.stringify(e))},saveTodoList:(e,t)=>{localStorage.setItem(`${e}`,JSON.stringify(t))},getTodoList:()=>{JSON.parse(localStorage.getItem("todoList"))}};document.querySelector("#all").addEventListener("click",t("allTasks"))})();