import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { BlogState } from '../../../store/blog/blog.state';
import { Observable } from 'rxjs';
import { BlogCardComponent } from '../../../UI/Blog/blog-card/blog-card.component';
import { BlogPopupComponent } from '../../../UI/Blog/blog-popup/blog-popup.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Blog } from '../../../store/blog/blog.state';
import { BlogAction } from '../../../store/blog/blog.action';
import { UserState } from '../../../store/user/user.state';
import { UserAction } from '../../../store';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [BlogCardComponent, CommonModule, RouterModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  headerImage = 'url("/asset/homepage/homepage-bg.png")';
  selectedArticle: any | null = null;
  insight$: Observable<any[]>;
  blog$!: Observable<Blog[]>;
  loading: boolean = true;
  podium: any[] = [];
  constructor(private store: Store) {
    this.insight$ = this.store.select(UserState.insight);
    this.store.dispatch(new UserAction.userInsight());

    this.insight$.subscribe((insight) => {
      if (insight) {
        insight.forEach((response) => {
          this.podium.push(response.userResponse);
        });
        console.log(this.podium);
      }
    });
  }

  ngOnInit() {
    this.blog$ = this.store.select(BlogState.blogs);
    this.blog$.subscribe((articles: Blog[]) => {
      this.loading = false;
    });
    this.store.dispatch(new BlogAction.GetBlogs());
  }
}
