using Serenity.Navigation;
using MyPages = SerenePoC.MovieDB.Pages;

[assembly: NavigationLink(1000, "Dashboard", url: "~/", permission: "", icon: "fa-tachometer")]
[assembly: NavigationMenu(2000, "Movie Database", icon: "fa-film")]
[assembly: NavigationLink(2100, "Movie DataBase/Movies", typeof(MyPages.MoviePage), icon: "fa-video-camera")]