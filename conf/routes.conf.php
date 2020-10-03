<?php

/** @var Atlantis\Site\Router */

///////////////////////////////////////////////////////////////////////////////
// mostly static routes ///////////////////////////////////////////////////////

($Router)
->Register(
	'Atlantis.Home',
	'{@}//index',
	'/',
	'Routes\\Home::Index'
)
->Register(
	'Atlantis.Login',
	'{@}//login',
	'/login',
	'Routes\\Login::Index'
)
->Register(
	'Atlantis.Logout',
	'{@}//logout',
	'/logout',
	'Routes\\Login::Destroy'
)
->Register(
	'Atlantis.Join',
	'{@}//join',
	'/join',
	'Routes\\Join::Index'
)
->Register(
	'Atlantis.Dashboard.Home',
	'{@}//dashboard',
	'/dashboard',
	'Routes\\Dashboard\\Home::Index'
)
->Register(
	'Atlantis.Dashboard.Blog.Create',
	'{@}//dashboard/blog/create',
	'/dashboard/blog/create',
	'Routes\\Dashboard\\Blog::Create'
)
->Register(
	'Atlantis.Dashboard.Blog.Post.New',
	'{@}//dashboard/blog/post',
	'/dashboard/blog/post?blog={{BlogID}}',
	'Routes\\Dashboard\\Blog::Post'
)
->Register(
	'Atlantis.Dashboard.Blog.Post.Edit',
	'{@}//dashboard/blog/post-edit',
	'/dashboard/blog/post-edit?post={{PostID}}',
	'Routes\\Dashboard\\Blog::PostEdit'
)
->Register(
	'Atlantis.Dashboard.Blog.Settings',
	'{@}//dashboard/blog/settings',
	'/dashboard/blog/settings?blog={{BlogID}}',
	'Routes\\Dashboard\\Blog::Settings'
)
->Register(
	'Atlantis.Dashboard.Blog.Tags',
	'{@}//dashboard/blog/tags',
	'/dashboard/blog/tags?blog={{BlogID}}',
	'Routes\\Dashboard\\Blog::Tags'
)
->Register(
	'Atlantis.Dashboard.Account.Settings',
	'{@}//dashboard/account/settings',
	'/dashboard/account/settings',
	'Routes\\Dashboard\\Account::Settings'
)
->Register(
	'Atlantis.Dashboard.Account.Password',
	'{@}//dashboard/account/password',
	'/dashboard/account/password',
	'Routes\\Dashboard\\Account::Password'
)
->Register(
	'Atlantis.Admin.Home',
	'{@}//ops',
	'/ops',
	'Routes\\Admin\\Home::Index'
);

///////////////////////////////////////////////////////////////////////////////
// json api routes ////////////////////////////////////////////////////////////

($Router)
->Register(
	'Atlantis.API.Blog',
	'{@}//api/v1/blog/($)',
	'/api/v1/blog/{{Command}}',
	'Routes\\Api\\V1\\Blog::Index'
)
->Register(
	'Atlantis.API.Post',
	'{@}//api/v1/post/($)',
	'/api/v1/post/{{Command}}',
	'Routes\\Api\\V1\\Post::Index'
)
->Register(
	'Atlantis.API.Image',
	'{@}//api/v1/image/($)',
	'/api/v1/image/{{Command}}',
	'Routes\\Api\\V1\\Image::Index'
)
->Register(
	'Atlantis.API.User',
	'{@}//api/v1/user/($)',
	'/api/v1/user/{{Command}}',
	'Routes\\Api\\V1\\User::Index'
)
->Register(
	'Atlantis.API.Test',
	'{@}//api/v1/test/($)',
	'/api/v1/test/{{Command}}',
	'Routes\\Api\\V1\\Test::Index'
);

///////////////////////////////////////////////////////////////////////////////
// wildly wildcarded routes ///////////////////////////////////////////////////

($Router)
->Register(
	'Atlantis.Blog.Post',
	'{@}//\x2b($)/($)',
	'/+{{BlogAlias}}/{{PostAlias}}',
	'Routes\\Blog\\Post::Index'
)
->Register(
	'Atlantis.Blog.Home',
	'{@}//\x2b($)',
	'/+{{BlogAlias}}',
	'Routes\\Blog\\Index::Index'
)
->Register(
	'Atlantis.User.Home',
	'{@}//\x7e($)',
	'/~{{UserAlias}}',
	'Routes\\User\\Index::Index'
)
->Register(
	'Atlantis.Handler.UploadImage',
	'{@}//media/usr/img/([a-f0-9]+/[a-f0-9]+/[a-f0-9]+/[a-f0-9]+/[a-f0-9]+)/(.+?)\.(.+?)$',
	'/media/usr/img/{{Path}}/{{Name}}.{{Ext}}',
	'Routes\\Media::Image'
)
->Register(
	'Atlantis.Handler.PageCMS',
	'{@}//(@)',
	'/{{PageURI}}',
	'Routes\\Page::Index'
)
->Register(
	'Atlantis.Handler.NotFound',
	'{@}//{@}',
	'/error/not-found',
	'Routes\\Home::NotFound'
);
