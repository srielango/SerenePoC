import { Decorators, EntityGrid, LookupEditor, QuickSearchField } from '@serenity-is/corelib';
import { MovieColumns, MovieForm, MovieRow, MovieService } from '../../ServerTypes/MovieDB';
import { MovieDialog } from './MovieDialog';
import { ExcelExportHelper, PdfExportHelper, ReportHelper } from "@serenity-is/extensions";
import { MovieListRequest } from '../../ServerTypes/MovieDB/MovieListRequest'; //'../../ServerTypes/MovieDB/MovieListRequest';
import { Aggregators } from "@serenity-is/corelib/slick";
import { GroupItemMetadataProvider } from "@serenity-is/sleekgrid";
import { coalesce, first, formatNumber, initFullHeightGridPage } from "@serenity-is/corelib/q";

@Decorators.registerClass('SerenePoC.MovieDB.MovieGrid')
export class MovieGrid extends EntityGrid<MovieRow, any> {
    protected getColumnsKey() { return MovieColumns.columnsKey; }
    protected getDialogType() { return MovieDialog; }
    protected getRowDefinition() { return MovieRow; }
    protected getService() { return MovieService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }

    protected getQuickFilters() {
        let items = super.getQuickFilters();

        const genreListFilter = first(items, x =>
            x.field == MovieRow.Fields.GenreList);

        genreListFilter.handler = h => {
            const request = (h.request as MovieListRequest);
            const values = (h.widget as LookupEditor).values;
            request.Genres = values.map(x => parseInt(x, 10));
            h.handled = true;
        };

        return items;
    }

    protected getQuickSearchFields(): QuickSearchField[] {
        return [
            { name: "", title: "all" },
            { name: "Description", title: "description" },
            { name: "Storyline", title: "storyline" },
            { name: "Year", title: "year" }
        ];
    }

    createSlickGrid() {
        var grid = super.createSlickGrid();

        // need to register this plugin for grouping or you'll have errors
        grid.registerPlugin(new GroupItemMetadataProvider());

        this.view.setSummaryOptions({
            aggregators: [
                new Aggregators.Avg('Runtime'),
                new Aggregators.Sum('Runtime'),
                new Aggregators.Max('Runtime')
            ]
        });

        return grid;
    }

    getColumns() {
        var columns = super.getColumns();

        first(columns, x => x.field === 'Runtime')
            .groupTotalsFormatter = (totals, col) =>
                (totals.avg ? ('avg: ' + coalesce(formatNumber(totals.avg[col.field], '0.'), '')) : '');

        return columns;
    }

    getSlickOptions() {
        var opt = super.getSlickOptions();
        opt.showFooterRow = true;
        return opt;
    }

    getButtons() {
        var buttons = super.getButtons();
        var myRow = MovieRow.Fields;

        buttons.push(ExcelExportHelper.createToolButton({
            grid: this,
            service: MovieService.baseUrl + '/ListExcel',
            onViewSubmit:() => this.onViewSubmit(),
            separator: true
        }));

        buttons.push(PdfExportHelper.createToolButton({
            grid: this,
            onViewSubmit: () => this.onViewSubmit()
        }));

        buttons.push({
            title: 'Group By Year',
            cssClass: 'expand-all-button',
            onClick: () => this.view.setGrouping(
                [{
                    getter: 'Year'
                }])
        });

        buttons.push({
            title: 'No Grouping',
            cssClass: 'collapse-all-button',
            onClick: () => this.view.setGrouping([])
        });

        return buttons;
    }
}
