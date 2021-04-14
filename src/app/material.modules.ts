import { NgModule } from "@angular/core";
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";
import { HttpClientModule,HTTP_INTERCEPTORS } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";


@NgModule({
    imports:[
        MatFormFieldModule,MatInputModule,MatIconModule,MatTabsModule,MatToolbarModule, MatButtonModule,FormsModule,HttpClientModule,MatTableModule
    ],
    exports:[
        MatFormFieldModule,MatInputModule,MatIconModule,MatTabsModule,MatToolbarModule,MatButtonModule,FormsModule,HttpClientModule,MatTableModule
    ]
})
export class MaterialModule {}