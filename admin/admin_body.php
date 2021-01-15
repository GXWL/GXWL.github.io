<?php include "config.php";?>
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
    <head>
        <title>欢迎页面</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/><meta name="renderer" content="webkit"/>
        <meta name="viewport" content="width=device-width,user-scalable=yes, minimum-scale=0.4, initial-scale=0.8"/> <!-- 手机H5兼容模式 -->  
        <meta http-equiv="pragma" content="no-cache"/><meta http-equiv="expires" content="0" />
        <meta http-equiv="Cache-Control" content="no-siteapp" /><meta http-equiv="Cache-Control" content="no-cache" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
        <link rel="stylesheet" href="./css/font.css">
        <link rel="stylesheet" href="./css/xadmin.css">
        <script type="text/javascript" src="./js/jquery.min.js"></script>	
        <script type="text/javascript" src="./lib/layui/layui.js" charset="utf-8"></script>
        <script type="text/javascript" src="./js/xadmin.js"></script>
    </head>
    <body>
        <div class="x-body layui-anim layui-anim-up"> 

            <blockquote class="layui-elem-quote">
                &nbsp;系统信息摘要 【当前系统版本：<script language="JavaScript" type="text/javascript" charset="utf-8" src="../save/ver.js?ver=<?php echo uniqid()?>"></script>
                &nbsp;&nbsp;最新版本：<script language="JavaScript" type="text/javascript" charset="utf-8" src="../save/ver.js?ver=<?php echo uniqid()?>"></script>
                &nbsp;&nbsp;当前云规则版本：<script language="JavaScript" type="text/javascript" charset="utf-8" src="../save/yun.ver.js?ver=<?php echo uniqid()?>"></script>
                &nbsp;&nbsp;最新版本：<script language="JavaScript" type="text/javascript" charset="utf-8" src="//server.nohacks.cn/parse/save/yun.ver.js?ver=<?php echo uniqid()?>"></script>
                &nbsp;&nbsp;<a onclick='x_admin_post("admin.php", {type:"upyundata"});' href="javascript:;"><font color="blue">更新规则</font></a>

                】
            </blockquote>
     
            <fieldset class="layui-elem-field">
            <legend>系统信息</legend>
                    <table class="layui-table">
                        <tbody>

                            <tr>
                                <th>当前域名</th>
                                <td><?php echo filter_input(INPUT_SERVER, "SERVER_NAME"); ?></td></tr>
                            <tr>
                                <th>系统时间</th>
                                <td id="time"></td></tr>
                            <tr>
                                <th>OS版本</th>
                                <td><?php echo php_uname('s') . php_uname('r'); ?></td></tr>

                            <tr>
                                <th>运行环境</th>
                                <td><?php echo filter_input(INPUT_SERVER, "SERVER_SOFTWARE"); ?></td></tr>
                            <tr>
                                <th>PHP版本</th>
                                <td><?php echo PHP_VERSION ?></td></tr>
                       <tr>
                                <th>当前版本</th>
                                <td><script language="JavaScript" type="text/javascript" charset="utf-8" src="../save/ver.js?ver=<?php echo uniqid()?>"></script></td></tr>

                            <tr>
                                <th>当前规则</th>
                                <td><script language="JavaScript" type="text/javascript" charset="utf-8" src="../save/yun.ver.js?ver=<?php echo uniqid()?>"></script></td></tr>
                            <tr>
                                <th>版权所有</th>
                                <td><a  target="__blank" >nohacks</a></td></tr>

                            
                        </tbody>
                    </table>
             
            </fieldset>
  
            <blockquote class="layui-elem-quote layui-quote-nm"><b><font color="#FF0000">仅供个人学习交流使用，切勿用于非法用途，否则后果自负！</font> </b></blockquote>
        </div>

       <script>
       
var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
    var cd = new Date();
    var time=zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    var data=zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2);   
    $('#time').text(data+" "+time);
};
function zeroPadding(num, digit) {
    var zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}
 
 </script>
        
    </body>
</html>