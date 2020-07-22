$(function(){

    $('.tombolTambahData').on('click', function(){

        $('#formModalLabel').html('Tambah data mahasiswa');
        $('.modal-footer button[type=submit]').html('Tambah data');

        $('#nama').val("");
        $('#nrp').val("");
        $('#email').val("");
        $('#jurusan').val("");

    });

    $('.tampilModalUbah').on('click', function(){
        
        $('#formModalLabel').html('Ubah data mahasiswa');
        $('.modal-footer button[type=submit]').html('Ubah data');
        $('.modal-body form').attr('action', 'http://localhost/phpmvc/public/mahasiswa/ubah');

        
        const id = $(this).data('id');
        
        $.ajax({
            url: 'http://localhost/phpmvc/public/mahasiswa/getubah',
            data: {id : id},
            method: 'post',
            dataType: 'json',
            success: function(data) {
                $('#nama').val(data.nama);
                $('#nrp').val(data.nrp);
                $('#email').val(data.email);
                $('#jurusan').val(data.jurusan);
                $('#id').val(data.id);
            }
        });

    })

});