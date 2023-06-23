using Microsoft.AspNetCore.Mvc;
using SerenePoC.Web.Modules.MovieDB.Movie;
using Serenity.Data;
using Serenity.Reporting;
using Serenity.Services;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.Data;
using System.Globalization;
using System.Linq;
using MyRow = SerenePoC.MovieDB.MovieRow;

namespace SerenePoC.MovieDB.Endpoints;

[Route("Services/MovieDB/Movie/[action]")]
[ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
public class MovieEndpoint : ServiceEndpoint
{
    [HttpPost, AuthorizeCreate(typeof(MyRow))]
    public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request,
        [FromServices] IMovieSaveHandler handler)
    {
        return handler.Create(uow, request);
    }

    [HttpPost, AuthorizeUpdate(typeof(MyRow))]
    public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request,
        [FromServices] IMovieSaveHandler handler)
    {
        return handler.Update(uow, request);
    }
 
    [HttpPost, AuthorizeDelete(typeof(MyRow))]
    public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request,
        [FromServices] IMovieDeleteHandler handler)
    {
        return handler.Delete(uow, request);
    }

    [HttpPost]
    public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request,
        [FromServices] IMovieRetrieveHandler handler)
    {
        return handler.Retrieve(connection, request);
    }

    [HttpPost, AuthorizeList(typeof(MyRow))]
    public ListResponse<MyRow> List(IDbConnection connection, MovieListRequest request,
        [FromServices] IMovieListHandler handler)
    {
        return handler.List(connection, request);
    }

    [HttpPost, AuthorizeList(typeof(MyRow))]
    public FileContentResult ListExcel(IDbConnection connection, MovieListRequest request,
        [FromServices] IMovieListHandler handler,
        [FromServices] IExcelExporter exporter)
    {
        var data = List(connection, request, handler).Entities;
        var groupData = data.GroupBy(x => x.Year).ToList();

        var excelData = new List<MyRow>();
        foreach (var row in groupData)
        {
            foreach (var record in row)
            {
                excelData.Add(record);
            }
            excelData.Add(new MyRow()
            {
                Title = "Total",
                Runtime = row.Sum(x => x.Runtime)
            });
        }

        //data.Add(new MyRow()
        //{
        //    Title = "Total",
        //    Runtime = 550
        //});

        //var bytes = exporter.Export(data, typeof(Columns.MovieColumns), request.ExportColumns);

        var bytes = exporter.Export(excelData, typeof(Columns.MovieColumns), request.ExportColumns);
        return ExcelContentResult.Create(bytes, "MovieList_" +
            DateTime.Now.ToString("yyyyMMdd_HHmmss", CultureInfo.InvariantCulture) + ".xlsx");
    }
}

