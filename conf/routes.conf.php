<?php

/** @var Atlantis\Site\Router */

///////////////////////////////////////////////////////////////////////////////
// mostly static routes ///////////////////////////////////////////////////////

Nether\Ki::Flow('Atlantis.Routes.Pre',[$Router]);

($Router)
->Register('Atlantis.Home',
	'{&}//index',
	'//{{Domain}}/',
	'Routes\\Home::Index'
)
->Register('Atlantis.Login',
	'{&}//login',
	'//{{Domain}}/login',
	'Routes\\Login::Index'
)
->Register('Atlantis.Login.Auth.Github',
	'{&}//login/auth/github',
	'//{{Domain}}/login/auth/github',
	'Routes\\Login::Github'
)
->Register('Atlantis.Login.Auth.Twitter',
	'{&}//login/auth/twitter',
	'//{{Domain}}/login/auth/twitter',
	'Routes\\Login::Twitter'
)
->Register('Atlantis.Logout',
	'{&}//logout',
	'//{{Domain}}/logout',
	'Routes\\Login::Destroy'
)
->Register('Atlantis.Join',
	'{&}//join',
	'//{{Domain}}/join',
	'Routes\\Join::Index'
)
->Register('Atlantis.Invite',
	'{&}//invite',
	'//{{Domain}}/invite',
	'Routes\\Invite::Index'
)
->Register('Atlantis.Dashboard.Home',
	'{&}//dashboard',
	'//{{Domain}}/dashboard',
	'Routes\\Dashboard\\Home::Index'
)
->Register('Atlantis.Dashboard.Blog.Create',
	'{&}//dashboard/blog/create',
	'//{{Domain}}/dashboard/blog/create',
	'Routes\\Dashboard\\Blog::Create'
)
->Register('Atlantis.Dashboard.Blog.Post.New',
	'{&}//dashboard/blog/post',
	'//{{Domain}}/dashboard/blog/post?blog={{BlogID}}',
	'Routes\\Dashboard\\Blog::Post'
)
->Register('Atlantis.Dashboard.Blog.Post.Edit',
	'{&}//dashboard/blog/post-edit',
	'//{{Domain}}/dashboard/blog/post-edit?post={{PostID}}',
	'Routes\\Dashboard\\Blog::PostEdit'
)
->Register('Atlantis.Dashboard.Blog.Post.Delete',
	'{&}//dashboard/blog/post-delete',
	'//{{Domain}}/dashboard/blog/post-delete?post={{PostID}}',
	'Routes\\Dashboard\\Blog::PostDelete'
)
->Register('Atlantis.Dashboard.Blog.Settings',
	'{&}//dashboard/blog/settings',
	'//{{Domain}}/dashboard/blog/settings?blog={{BlogID}}',
	'Routes\\Dashboard\\Blog::Settings'
)
->Register('Atlantis.Dashboard.Blog.Tags',
	'{&}//dashboard/blog/tags',
	'//{{Domain}}/dashboard/blog/tags?blog={{BlogID}}',
	'Routes\\Dashboard\\Blog::Tags'
)
->Register('Atlantis.Dashboard.Account.Index',
	'{&}//dashboard/account',
	'//{{Domain}}/dashboard/account',
	'Routes\\Dashboard\\Account::Index'
)
->Register('Atlantis.Dashboard.Account.Settings',
	'{&}//dashboard/account/settings',
	'//{{Domain}}/dashboard/account/settings',
	'Routes\\Dashboard\\Account::Settings'
)
->Register('Atlantis.Dashboard.Account.Password',
	'{&}//dashboard/account/password',
	'//{{Domain}}/dashboard/account/password',
	'Routes\\Dashboard\\Account::Password'
)
->Register('Atlantis.Dashboard.Account.ThirdPartyAuth',
	'{&}//dashboard/account/auth',
	'//{{Domain}}/dashboard/account/auth',
	'Routes\\Dashboard\\Account::Auth'
)
->Register('Atlantis.Dashboard.Account.Images',
	'{&}//dashboard/account/images',
	'//{{Domain}}/dashboard/account/images?blog={{BlogID}}',
	'Routes\\Dashboard\\Account::Images'
)
->Register('Atlantis.Admin.Home',
	'{&}//ops',
	'//{{Domain}}/ops',
	'Routes\\Admin\\Home::Index'
)
->Register('Atlantis.Admin.Users.List',
	'{&}//ops/users/list',
	'//{{Domain}}/ops/users/list',
	'Routes\\Admin\\Users::Index'
)
->Register('Atlantis.Admin.AccountPlans.List',
	'{&}//ops/account-plans/list',
	'//{{Domain}}/ops/account-plans/list',
	'Routes\\Admin\\AccountPlans::Index'
);

///////////////////////////////////////////////////////////////////////////////
// json api routes ////////////////////////////////////////////////////////////

($Router)
->Register('Atlantis.API.Blog',
	'{&}//api/v1/blog/($)',
	'//{{Domain}}/api/v1/blog/{{Command}}',
	'Routes\\Api\\V1\\Blog::Index'
)
->Register('Atlantis.API.Post',
	'{&}//api/v1/post/($)',
	'//{{Domain}}/api/v1/post/{{Command}}',
	'Routes\\Api\\V1\\Post::Index'
)
->Register('Atlantis.API.Image',
	'{&}//api/v1/image/($)',
	'//{{Domain}}/api/v1/image/{{Command}}',
	'Routes\\Api\\V1\\Image::Index'
)
->Register('Atlantis.API.User',
	'{&}//api/v1/user/($)',
	'//{{Domain}}/api/v1/user/{{Command}}',
	'Routes\\Api\\V1\\User::Index'
)
->Register('Atlantis.API.Invite',
	'{&}//api/v1/invite/($)',
	'//{{Domain}}/api/v1/invite/{{Command}}',
	'Routes\\Api\\V1\\Invite::Index'
)
->Register('Atlantis.API.AccountPlan',
	'{&}//api/v1/account-plan/($)',
	'//{{Domain}}/api/v1/account-plan/{{Command}}',
	'Routes\\Api\\V1\\AccountPlan::Index'
)
->Register('Atlantis.API.Test',
	'{&}//api/v1/test/($)',
	'//{{Domain}}/api/v1/test/{{Command}}',
	'Routes\\Api\\V1\\Test::Index'
);

///////////////////////////////////////////////////////////////////////////////
// wildly wildcarded routes ///////////////////////////////////////////////////

Nether\Ki::Flow('Atlantis.Routes.Post',[$Router]);

($Router)
->Register('Atlantis.Blog.Post',
	'{&}//\x2b($)/($)(?:/($))?',
	'//{{Domain}}/+{{BlogAlias}}/{{PostID}}/{{PostAlias}}',
	'Routes\\Blog\\Post::Index'
)
->Register('Atlantis.Blog.Home',
	'{&}//\x2b($)',
	'//{{Domain}}/+{{BlogAlias}}',
	'Routes\\Blog\\Index::Index'
)
->Register('Atlantis.User.Home',
	'{&}//\x7e($)',
	'//{{Domain}}/~{{UserAlias}}',
	'Routes\\User\\Index::Index'
)
->Register('Atlantis.Handler.UploadImage',
	'{&}//media/usr/img/([a-f0-9]+/[a-f0-9]+/[a-f0-9]+/[a-f0-9]+/[a-f0-9]+)/(.+?)\.(.+?)$',
	'//{{Domain}}/media/usr/img/{{Path}}/{{Name}}.{{Ext}}',
	'Routes\\Media::Image'
)
->Register('Atlantis.Handler.PageCMS',
	'{&}//(@)',
	'//{{Domain}}/{{PageURI}}',
	'Routes\\Page::Index'
)
->Register('Atlantis.Blog.PostCustomDomain',
	'{@}//(@)',
	'//{{Domain}}/{{PostAlias}}',
	'Routes\\Blog\\PostCD::Index'
)
->Register('Atlantis.Blog.IndexCustomDomain',
	'{@}//index',
	'//{{Domain}}/',
	'Routes\\Blog\\IndexCD::Index'
)
->Register('Atlantis.Handler.NotFound',
	'{@}//{@}',
	'//{{Domain}}/error/not-found',
	'Routes\\Home::NotFound'
);

Nether\Ki::Flow('Atlantis.Routes.Final',[$Router]);
