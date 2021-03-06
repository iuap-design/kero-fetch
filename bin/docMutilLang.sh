#!/bin/sh

# 删除Kind所在行，替换中英文

sourceStr=(Param Returns Type Description)

replaceStr=(参数 返回值 类型 描述)

# 考虑到会把方法addParameter中的Param转为中文参数，所以在这里做点处理：
# 先将Parameter转为opqrst---tsrqpo，
# 然后等上面的转完之后，再转回来
sourceStr1=(Parameter Returns Type Description)

replaceStr1=(opqrsttsrqpo abcddcba efghhgfe uvwxyzzyxwvu)

sysOS=`uname -s`

for file in ./docs/*
do
	# 判断是否为md结尾的文件
	if test -f $file &&  [ "${file##*.}"x = "md"x ]
    then
       ## echo $file 是文件
        if [ $sysOS == "Darwin" ];then
			sed -i "" "/Kind/"d $file
		else
			sed -i "/Kind/"d $file
		fi
		# echo $file 是文件

 	   i=0
 	   while [ $i -lt ${#sourceStr1[@]} ]
 	   do
 		   # 双引号是转义，单引号不转义
 		   if [ $sysOS == "Darwin" ];then
 			   sed -i "" "s/${sourceStr1[$i]}/${replaceStr1[$i]}/g" $file
 		   else
 			   sed -i "s/${sourceStr1[$i]}/${replaceStr1[$i]}/g" $file
 		   fi
 		   let i++
 	   done

 		j=0
 		while [ $j -lt ${#sourceStr[@]} ]
 		do
 			# 双引号是转义，单引号不转义
 			if [ $sysOS == "Darwin" ];then
 				sed -i "" "s/${sourceStr[$j]}/${replaceStr[$j]}/g" $file
 			else
 				sed -i "s/${sourceStr[$j]}/${replaceStr[$j]}/g" $file
 			fi
 		    let j++
 		done

		k=0
 		while [ $k -lt ${#sourceStr1[@]} ]
 		do
 			# 双引号是转义，单引号不转义
 			if [ $sysOS == "Darwin" ];then
 				sed -i "" "s/${replaceStr1[$k]}/${sourceStr1[$k]}/g" $file
 			else
 				sed -i "s/${replaceStr1[$k]}/${sourceStr1[$k]}/g" $file
 			fi
 		    let k++
 		done

    fi

done
