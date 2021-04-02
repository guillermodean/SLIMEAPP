import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
    imports:[
        MatFormFieldModule,MatInputModule,MatIconModule,MatTabsModule,MatToolbarModule
    ],
    exports:[
        MatFormFieldModule,MatInputModule,MatIconModule,MatTabsModule,MatToolbarModule
    ]
})
export class MaterialModule {}