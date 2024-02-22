import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { UnknownrouteComponent } from './unknownroute/unknownroute.component';

export const routes: Routes = [
    { path: '', redirectTo: 'blogs', pathMatch: 'full' },
    { path: 'blog/:id', component: BlogComponent },
    { path: 'blogs', component: BlogsComponent },
    { path: '**', redirectTo: '404', pathMatch: 'full' },
    { path: '404', component: UnknownrouteComponent }
];
