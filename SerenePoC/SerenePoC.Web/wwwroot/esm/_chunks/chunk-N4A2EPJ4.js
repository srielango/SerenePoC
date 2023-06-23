import{a as r,c as s,d as P,e as L,f as l,g as x}from"./chunk-FEDAVPE7.js";var D=class{};r(D,"GenreColumns"),D.columnsKey="MovieDB.Genre";var u=s(l(),1);var i=class{static getLookup(){return(0,u.getLookup)("MovieDB.Genre")}static getLookupAsync(){return L(this,null,function*(){return(0,u.getLookupAsync)("MovieDB.Genre")})}};r(i,"GenreRow"),i.idProperty="GenreId",i.nameProperty="Name",i.localTextPrefix="MovieDB.Genre",i.lookupKey="MovieDB.Genre",i.deletePermission="Administration:General",i.insertPermission="Administration:General",i.readPermission="Administration:General",i.updatePermission="Administration:General",i.Fields=(0,u.fieldsProxy)();var b=s(l(),1),E;(e=>(e.baseUrl="MovieDB/Genre",e.Methods={Create:"MovieDB/Genre/Create",Update:"MovieDB/Genre/Update",Delete:"MovieDB/Genre/Delete",Retrieve:"MovieDB/Genre/Retrieve",List:"MovieDB/Genre/List"},["Create","Update","Delete","Retrieve","List"].forEach(t=>{e[t]=function(c,d,y){return(0,b.serviceRequest)(e.baseUrl+"/"+t,c,d,y)}})))(E||(E={}));var A=s(x(),1),S=(t=>(t[t.Film=1]="Film",t[t.TvSeries=2]="TvSeries",t[t.MiniSeries=3]="MiniSeries",t))(S||{});A.Decorators.registerEnumType(S,"SerenePoC.Web.Modules.MovieDB.Movie.MovieKind","MovieDB.MovieKind");var Q=s(x(),1),U=s(l(),1);var M=s(x(),1),T=s(l(),1);var f=class extends M.PrefixedContext{constructor(m){if(super(m),!f.init){f.init=!0;var e=M.StringEditor;(0,T.initFormType)(f,["Name",e])}}},q=f;r(q,"GenreForm"),q.formKey="MovieDB.Genre";var o=s(x(),1);var G=s(l(),1);var R=class extends o.PrefixedContext{constructor(m){if(super(m),!R.init){R.init=!0;var e=o.StringEditor,t=o.TextAreaEditor,c=o.IntegerEditor,d=o.DateEditor,y=o.EnumEditor,X=o.LookupEditor;(0,G.initFormType)(R,["Title",e,"Description",t,"Storyline",t,"Year",c,"ReleaseDate",d,"Runtime",c,"Kind",y,"GenreList",X])}}},g=R;r(g,"MovieForm"),g.formKey="MovieDB.Movie";var I=s(l(),1);var a=class{};r(a,"MovieGenresRow"),a.idProperty="MovieGenreId",a.localTextPrefix="MovieDB.MovieGenres",a.deletePermission="Administration:General",a.insertPermission="Administration:General",a.readPermission="Administration:General",a.updatePermission="Administration:General",a.Fields=(0,I.fieldsProxy)();var O=s(l(),1);var n=class{};r(n,"MovieRow"),n.idProperty="MovieId",n.nameProperty="Title",n.localTextPrefix="MovieDB.Movie",n.deletePermission="Administration:General",n.insertPermission="Administration:General",n.readPermission="Administration:General",n.updatePermission="Administration:General",n.Fields=(0,O.fieldsProxy)();var J=s(l(),1),H;(e=>(e.baseUrl="MovieDB/Movie",e.Methods={Create:"MovieDB/Movie/Create",Update:"MovieDB/Movie/Update",Delete:"MovieDB/Movie/Delete",Retrieve:"MovieDB/Movie/Retrieve",List:"MovieDB/Movie/List"},["Create","Update","Delete","Retrieve","List"].forEach(t=>{e[t]=function(c,d,y){return(0,J.serviceRequest)(e.baseUrl+"/"+t,c,d,y)}})))(H||(H={}));var v=class{format(m){let e=m.value;if(!e||!e.length)return"";let t=i.getLookup().itemById;return e.map(c=>{let d=t[c];return d?(0,U.htmlEncode)(d.Name):c.toString()}).join(", ")}};r(v,"GenreListFormatter"),v=P([Q.Decorators.registerFormatter("MovieTutorial.MovieDB.GenreListFormatter")],v);var B=class{};r(B,"MovieColumns"),B.columnsKey="MovieDB.Movie";export{D as a,q as b,i as c,E as d,B as e,g as f,n as g,H as h};
//# sourceMappingURL=chunk-N4A2EPJ4.js.map