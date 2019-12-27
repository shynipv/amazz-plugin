<?php
/*
plugin name:amazzz plugin
author:asdf
*/
add_filter('the_content','amazingContentEdits');
function amazingContentEdits($con)
{
  $con=$con.'<p>bc cnbvn nbn</p>';
  $con=str_replace('sentence','******',$con);
  return $con;
}
add_shortcode('mnbv','shortfunc');
function shortfunc()
{
  return 2+2;
}
