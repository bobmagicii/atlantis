<?php

/** @var Atlantis\Site\Router */

///////////////////////////////////////////////////////////////////////////////
// mostly static routes ///////////////////////////////////////////////////////

($Router)
->Register(
	'Atlantis.Home',
	'{&}//index',
	'//{{Domain}}/',
	'Routes\\Home::Index'
)
->Register(
	'Atlantis.Login',
	'{&}//login',
	'//{{Domain}}/login',
	'Routes\\Login::Index'
)
->Register(
	'Atlantis.Logout',
	'{&}//logout',
	'//{{Domain}}/logout',
	'Routes\\Login::Destroy'
)
->Register(
	'Atlantis.Join',
	'{&}//join',
	'//{{Domain}}/join',
	'Routes\\Join::Index'
)
->Register(
	'Atlantis.Invite',
	'{&}//invite',
	'//{{Domain}}/invite',
	'Routes\\Invite::Index'
)
->Register(
	'Atlantis.Dashboard.Home',
	'{&}//dashboard',
	'//{{Domain}}/dashboard',
	'Routes\\Dashboard\\Home::Index'
)
->Register(
	'Atlantis.Dashboard.Blog.Create',
	'{&}//dashboard/blog/create',
	'//{{Domain}}/dashboard/blog/create',
	'Routes\\Dashboard\\Blog::Create'
)
->Register(
	'Atlantis.Dashboard.Blog.Post.New',
	'{&}//dashboard/blog/post',
	'//{{Domain}}/dashboard/blog/post?blog={{BlogID}}',
	'Routes\\Dashboard\\Blog::Post'
)
->Register(
	'Atlantis.Dashboard.Blog.Post.Edit',
	'{&}//dashboard/blog/post-edit',
	'//{{Domain}}/dashboard/blog/post-edit?post={{PostID}}',
	'Routes\\Dashboard\\Blog::PostEdit'
)
->Register(
	'Atlantis.Dashboard.Blog.Settings',
	'{&}//dashboard/blog/settings',
	'//{{Domain}}/dashboard/blog/settings?blog={{BlogID}}',
	'Routes\\Dashboard\\Blog::Settings'
)
->Register(
	'Atlantis.Dashboard.Blog.Tags',
	'{&}//dashboard/blog/tags',
	'//{{Domain}}/dashboard/blog/tags?blog={{BlogID}}',
	'Routes\\Dashboard\\Blog::Tags'
)
->Register(
	'Atlantis.Dashboard.Account.Settings',
	'{&}//dashboard/account/settings',
	'//{{Domain}}/dashboard/account/settings',
	'Routes\\Dashboard\\Account::Settings'
)
->Register(
	'Atlantis.Dashboard.Account.Password',
	'{&}//dashboard/account/password',
	'//{{Domain}}/dashboard/account/password',
	'Routes\\Dashboard\\Account::Password'
)
->Register(
	'Atlantis.Admin.Home',
	'{&}//ops',
	'//{{Domain}}/ops',
	'Routes\\Admin\\Home::Index'
);

///////////////////////////////////////////////////////////////////////////////
// json api routes ////////////////////////////////////////////////////////////

($Router)
->Register(
	'Atlantis.API.Blog',
	'{&}//api/v1/blog/($)',
	'//{{Domain}}/api/v1/blog/{{Command}}',
	'Routes\\Api\\V1\\Blog::Index'
)
->Register(
	'Atlantis.API.Post',
	'{&}//api/v1/post/($)',
	'//{{Domain}}/api/v1/post/{{Command}}',
	'Routes\\Api\\V1\\Post::Index'
)
->Register(
	'Atlantis.API.Image',
	'{&}//api/v1/image/($)',
	'//{{Domain}}/api/v1/image/{{Command}}',
	'Routes\\Api\\V1\\Image::Index'
)
->Register(
	'Atlantis.API.User',
	'{&}//api/v1/user/($)',
	'//{{Domain}}/api/v1/user/{{Command}}',
	'Routes\\Api\\V1\\User::Index'
)
->Register(
	'Atlantis.API.Invite',
	'{&}//api/v1/invite/($)',
	'//{{Domain}}/api/v1/invite/{{Command}}',
	'Routes\\Api\\V1\\Invite::Index'
)
->Register(
	'Atlantis.API.Test',
	'{&}//api/v1/test/($)',
	'//{{Domain}}/api/v1/test/{{Command}}',
	'Routes\\Api\\V1\\Test::Index'
);

///////////////////////////////////////////////////////////////////////////////
// wildly wildcarded routes ///////////////////////////////////////////////////

($Router)
->Register(
	'Atlantis.Blog.Post',
	'{&}//\x2b($)/($)',
	'//{{Domain}}/+{{BlogAlias}}/{{PostAlias}}',
	'Routes\\Blog\\Post::Index'
)
->Register(
	'Atlantis.Blog.Home',
	'{&}//\x2b($)',
	'//{{Domain}}/+{{BlogAlias}}',
	'Routes\\Blog\\Index::Index'
)
->Register(
	'Atlantis.User.Home',
	'{&}//\x7e($)',
	'//{{Domain}}/~{{UserAlias}}',
	'Routes\\User\\Index::Index'
)
->Register(
	'Atlantis.Handler.UploadImage',
	'{&}//media/usr/img/([a-f0-9]+/[a-f0-9]+/[a-f0-9]+/[a-f0-9]+/[a-f0-9]+)/(.+?)\.(.+?)$',
	'//{{Domain}}/media/usr/img/{{Path}}/{{Name}}.{{Ext}}',
	'Routes\\Media::Image'
)
->Register(
	'Atlantis.Handler.PageCMS',
	'{&}//(@)',
	'//{{Domain}}/{{PageURI}}',
	'Routes\\Page::Index'
)
->Register(
	'Atlantis.Blog.PostCustomDomain',
	'{@}//(@)',
	'//{{Domain}}/{{PostAlias}}',
	'Routes\\Blog\\PostCD::Index'
)
->Register(
	'Atlantis.Blog.IndexCustomDomain',
	'{@}//index',
	'//{{Domain}}/',
	'Routes\\Blog\\IndexCD::Index'
)
->Register(
	'Atlantis.Handler.NotFound',
	'{@}//{@}',
	'//{{Domain}}/error/not-found',
	'Routes\\Home::NotFound'
);
