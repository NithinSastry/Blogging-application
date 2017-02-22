import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppHeader from './views/appHeader';
import Login from './views/login';
import PostList from './views/posts/postEdit';
import PostView from './views/posts/postView';
import PostEdit from './views/posts/postEdit';
import UserList from './views/users/userList';
import UserView from './views/users/userView';
import UserEdit from './views/users/userEdit';
import AppLayout from './views/appLayout';

export default (
    <Route path="/" component={AppLayout}>
        <IndexRoute component={PostList} />
        <Route
            path="posts/:pageNum/?"
            component={PostList}
            ignoreScrollBehavior
        />
        <Route
            path="/posts/create"
            component={PostEdit}
        />
        <Route
            path="/posts/:postId/edit"
            component={PostEdit}
        />
        <Route
            path="/posts/:postId"
            component={PostView}
        />
        <Route
            path="/users"
            component={UserList}
        />
        <Route
            path="/users/create"
            component={UserEdit}
        />
        <Route
            path="/users/:userId/edit"
            component={UserEdit}
        />
        <Route
            path="/users/:userId"
            component={UserView}
        />
        <Route
            path="/login"
            component={Login}
        />
        <Route
            path="*"
            component={PostList}
        />
    </Route>
);