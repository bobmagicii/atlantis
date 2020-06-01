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
);

///////////////////////////////////////////////////////////////////////////////
// json api routes ////////////////////////////////////////////////////////////

($Router)
->Register(
	'Atlantis.API.Test',
	'{@}//api/v1/test/($)',
	'/api/v1/test/{Command}',
	'Routes\\Api\\V1\\Test::Index'
);

///////////////////////////////////////////////////////////////////////////////
// wildly wildcarded routes ///////////////////////////////////////////////////

($Router)
->Register(
	'Atlantis.Blog.Post',
	'{@}//\x2b($)/($)',
	'/+{{BlogAlias}}/{{PostAlias}}',
	'Routes\\Blog\\Index::Index'
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
