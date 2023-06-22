import { Decorators, EntityGrid, QuickSearchField } from '@serenity-is/corelib';
import { MovieColumns, MovieForm, MovieRow, MovieService } from '../../ServerTypes/MovieDB';
import { MovieDialog } from './MovieDialog';
import { ExcelExportHelper, PdfExportHelper, ReportHelper } from "@serenity-is/extensions";

@Decorators.registerClass('SerenePoC.MovieDB.MovieGrid')
export class MovieGrid extends EntityGrid<MovieRow, any> {
    protected getColumnsKey() { return MovieColumns.columnsKey; }
    protected getDialogType() { return MovieDialog; }
    protected getRowDefinition() { return MovieRow; }
    protected getService() { return MovieService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }

    protected getQuickSearchFields(): QuickSearchField[] {
        return [
            { name: "", title: "all" },
            { name: "Description", title: "description" },
            { name: "Storyline", title: "storyline" },
            { name: "Year", title: "year" }
        ];
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

        return buttons;
    }
}