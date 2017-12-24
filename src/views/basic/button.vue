/**
* @author: wenhao.huang
* @date:   2017/12/23
*/
<template>
    <article class="page page-article page-wrap">
        <h2>Button 按钮</h2>
        <div class="section-content">
            <p>常用的按钮操作</p>
        </div>
        <h3>基础用法</h3>
        <div class="section-content">
            <!--todo-->
            <p>基础的按钮用法。</p>
            <div class="ibox-color bg-primary">Primary<br>#48FFF2</div>
        </div>
        <h3>禁用状态</h3>
        <div class="section-content">
            <p>按钮不可用状态。</p>
            <div class="flex flex-justify-between">
                <div class="ibox-color bg-success">Success<br>#67C23A</div>
                <div class="ibox-color bg-warning">Warning<br>#E6A23C</div>
                <div class="ibox-color bg-danger">Danger<br>#F56C6C</div>
                <div class="ibox-color bg-info">Info<br>#909399</div>
            </div>
        </div>
        <h3>按钮组</h3>
        <div class="section-content">
            <p>以按钮组的方式出现，常用于多项类似操作。</p>
            <div class="flex flex-justify-between">
                <div class="ibox-color bg-success">Success<br>#67C23A</div>
                <div class="ibox-color bg-warning">Warning<br>#E6A23C</div>
                <div class="ibox-color bg-danger">Danger<br>#F56C6C</div>
                <div class="ibox-color bg-info">Info<br>#909399</div>
            </div>
        </div>
        <h3>不同尺寸</h3>
        <div class="section-content">
            <p>Button 提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
            <div class="flex flex-justify-between">
                <div class="ibox-color bg-success">Success<br>#67C23A</div>
                <div class="ibox-color bg-warning">Warning<br>#E6A23C</div>
                <div class="ibox-color bg-danger">Danger<br>#F56C6C</div>
                <div class="ibox-color bg-info">Info<br>#909399</div>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        name: 'buttonItem'
    }
</script>

<style lang="scss">

</style>
