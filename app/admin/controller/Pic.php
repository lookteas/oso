<?php
// +----------------------------------------------------------------------
// | YFCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2015-2016 http://www.rainfer.cn All rights reserved.
// +----------------------------------------------------------------------
// | Author: rainfer <81818832@qq.com>
// +----------------------------------------------------------------------
namespace app\admin\controller;

use app\admin\model\AuthRule;
use app\admin\model\Options;
use think\Db;
use think\Cache;
use think\helper\Time;

class Pic extends Base
{
    /**
     * 站点设置
     */
    public function index()
    {
        //主题
        $tpls = Options::themes();
        $this->assign('templates', $tpls);
        $sys = Options::get_options();
        $map = Options::map();
        $this->assign('map_lat', $map['map_lat']);
        $this->assign('map_lng', $map['map_lng']);
        $this->assign('sys', $sys);
        return $this->fetch();
    }



    /*
     * 清理缓存
     */
    public function clear()
    {
        Cache::clear();
        $this->success('清理缓存成功');
    }
}