import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAndCallFunctionComponent } from './create-and-call-function/create-and-call-function.component';
import { EventsComponent } from './events/events.component';
import { GetTextBoxValueAndPrintComponent } from './get-text-box-value-and-print/get-text-box-value-and-print.component';
import { SimpleCounterComponent } from './simple-counter/simple-counter.component';
import { BasicRuleOfStyleComponent } from './basic-rule-of-style/basic-rule-of-style.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { IfElseComponent } from './if-else/if-else.component';
import { MultipleConditionElseIfComponent } from './multiple-condition-else-if/multiple-condition-else-if.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { NestedLoopComponent } from './nested-loop/nested-loop.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';

import { FormsModule } from '@angular/forms';
import { ToggleElementComponent } from './toggle-element/toggle-element.component';
import { UseBootstrapComponent } from './use-bootstrap/use-bootstrap.component';
import { MaterialUiComponent } from './material-ui/material-ui.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { ProjectNavbarComponent } from './project-navbar/project-navbar.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ChildComponent } from './send-data-parent-to-child-component/child/child.component';
import { ParentComponent } from './send-data-parent-to-child-component/parent/parent.component';
import { ChildCompComponent } from './send-data-child-to-parent-component/child-comp/child-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAndCallFunctionComponent,
    EventsComponent,
    GetTextBoxValueAndPrintComponent,
    SimpleCounterComponent,
    BasicRuleOfStyleComponent,
    PropertyBindingComponent,
    IfElseComponent,
    MultipleConditionElseIfComponent,
    SwitchCaseComponent,
    ForLoopComponent,
    NestedLoopComponent,
    StyleBindingComponent,
    HeaderComponent,
    FormComponent,
    ToggleElementComponent,
    UseBootstrapComponent,
    MaterialUiComponent,
    ProjectNavbarComponent,
    TodoListComponent,
    ChildComponent,
    ParentComponent,
    ChildCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
